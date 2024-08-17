import { Injectable } from '@nestjs/common';
import { AuthDataDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const randomUsers = [
    {
    id: 1,
    username: 'jhin',
    password: '4444'
    },
    {
    id: 2,
    username: 'cait',
    password: '1111'
    }
]

@Injectable()
export class AuthService {
    constructor(private jwtservice: JwtService){}

    validateUser({username, password}: AuthDataDto) {
        const user = randomUsers.find((user) => user.username === username)
        if (!user) return null
        if (password === user.password) {
            const {password, ...findUser} = user  
            return this.jwtservice.sign(findUser);
        }
    }
}
