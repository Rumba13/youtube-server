import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService, private userService: UsersService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const jwtToken = req.headers.authorization || null;

    if (jwtToken === null) {
      req['user'] = null;
      next();
      return;
    }

    try {
      const payload: JwtPayload = await this.jwtService.verifyAsync(jwtToken);
      req['user'] = this.userService.findOne(payload.username);
    } catch (err) {
      req['user'] = null;
      console.log(err);
    } finally {
      next();
    }
  }
}
