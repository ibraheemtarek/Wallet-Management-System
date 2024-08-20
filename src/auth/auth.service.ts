import { Inject, Injectable } from '@nestjs/common';
import { AuthDataDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from 'src/models/user.model';

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
    constructor(
        @InjectModel(UserModel) private userModel: typeof UserModel,
        private readonly jwtservice: JwtService
        // private userService: UserService
    ){}

    async validateUser(username: string, password: string) {
        const user = await this.userModel.findOne({where: {username}})
        if (!user) return null

        if (password === user.password) {
            const {password, ...findUser} = user  
            return this.jwtservice.sign(findUser);
        }
    }




    // validateUser({username, password}: AuthDataDto) {
    //     const user = randomUsers.find((user) => user.username === username)
    //     if (!user) return null
    //     if (password === user.password) {
    //         const {password, ...findUser} = user  
    //         return this.jwtservice.sign(findUser);
    //     }
    // }
}
