import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from 'src/models/user.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel) private userModel: typeof UserModel,
    private readonly jwtservice: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userModel.findOne({ where: { username } });
    if (!user) return null;

    if (password === user.password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...findUser } = user;
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
