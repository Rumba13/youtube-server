import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './sign-in.dto';
import { JwtType } from './jwt.type';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.interface';
import { PasswordHashService } from '../password-hash/password-hash.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './sign-up.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private passwordHashService: PasswordHashService,
    private jwtService: JwtService,
  ) {}
  public async signIn(signInDto: SignInDto): Promise<{ access_token: JwtType }> {
    const user: User | null = this.userService.findOne(signInDto.name);

    if (!user) {
      throw new UnauthorizedException();
    }
    if (!(await this.passwordHashService.verify(signInDto.password, user.password))) {
      throw new UnauthorizedException();
    }

    const jwtPayload: JwtPayload = {
      sub: user.userId,
      username: user.name,
      icon: user.icon,
    };

    return {
      access_token: await this.jwtService.signAsync(jwtPayload),
    };
  }

  public async signUp(@Body() signUpDto: SignUpDto): Promise<{ access_token: JwtType }> {
    const addedUser = this.userService.create(signUpDto.name, await this.passwordHashService.hash(signUpDto.password));

    const jwtPayload: JwtPayload = {
      sub: addedUser.userId,
      username: addedUser.name,
      icon: addedUser.icon,
    };

    this.auth(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMSIsInVzZXJuYW1lIjoiRXZhMSIsImljb24iOiJodHRwczovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvaT9pZD0zN2JhNjc2ODY1ZDY4OWZiY2Y1NGIyZDE3ODQ5MGRhNTk3MDNmMjAzLTExNDU5NjEzLWltYWdlcy10aHVtYnMmbj0xMyIsImlhdCI6MTcwOTk5NTEzOSwiZXhwIjoxNzEwMDk1MTM4fQ.jN6Yjg8AOTmGzLOBhTIlPbgcfUE-Kx769fpqek_hWOU',
    );

    return {
      access_token: await this.jwtService.signAsync(jwtPayload),
    };
  }
  public auth(jwt: JwtType) {
    console.log(this.jwtService.decode(jwt));
  }
}
