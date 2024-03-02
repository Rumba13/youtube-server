import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import * as process from 'process';

@Injectable()
export class PasswordHashService {
  private readonly hashSecret = Buffer.from(process.env.HASH_SECRET);
  public async hash(password: string) {
    return await argon2.hash(password, {
      secret: this.hashSecret,
      type: argon2.argon2i,
    });
  }

  public verify(password: string, hashedPassword: string) {
    return argon2.verify(hashedPassword, password, {
      secret: this.hashSecret,
    });
  }
}
