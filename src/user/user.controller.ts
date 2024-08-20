import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userservice: UserService
    ) {}

    @Post('create')
    createNewUser(@Body() userDto: {id:number, username: string, password: string}){
        return this.userservice.createUser(userDto.id, userDto.username, userDto.password);
    };
    @Get('getusers')
    findAllUsers(){
        return this.userservice.getAllUsers();
    };
}
