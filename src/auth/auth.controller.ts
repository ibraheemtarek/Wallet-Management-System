import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from '@nestjs/common';
import { AuthDataDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { jwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post("login")
    @UseGuards(LocalGuard)
    userLogin(@Req() req: Request){
        return req.user
    }
    // userLogin(@Body() AuthDataDto: AuthDataDto){
        // const user = this.authService.validateUser(AuthDataDto);
        // if(!user) throw new HttpException('invalid credentials', 401);
        // return user

    @Get('status')
    @UseGuards(jwtAuthGuard)
    userStatus(@Req() req: Request){
        console.log('inside auth controller')
        return req.user
    }
}
