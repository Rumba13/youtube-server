import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PasswordHashModule } from '../password-hash/password-hash.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [UsersModule, PasswordHashModule],
})
export class AuthModule {}
