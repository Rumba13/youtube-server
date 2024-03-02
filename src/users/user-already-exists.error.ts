import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExists extends HttpException {
  constructor() {
    super('This user already exists', HttpStatus.CONFLICT);
  }
}
