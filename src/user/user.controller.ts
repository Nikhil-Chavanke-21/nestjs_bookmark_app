import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRequest } from '../auth/decorator/user.decorator';
import { JwtGaurd } from '../auth/gaurd';

@UseGuards(JwtGaurd)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@UserRequest() user: User) {
    return user;
  }
}
