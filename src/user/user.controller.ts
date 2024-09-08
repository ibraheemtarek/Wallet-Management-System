import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userservice: UserService) {}

  @Post('create')
  createNewUser(
    @Body() userDto: { id: number; username: string; password: string },
  ) {
    return this.userservice.createUser(
      userDto.id,
      userDto.username,
      userDto.password,
    );
  }
  @Get('getusers')
  async findAllUsers() {
    try {
      const users = await this.userservice.getAllUsers();
      return users;
    } catch (error) {
      throw new HttpException(
        'error from controller',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
      // if (error instanceof NotFoundException) {
      //   throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      // }
    }
  }
}
