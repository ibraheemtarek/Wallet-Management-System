import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from 'src/models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel) private userModel: typeof UserModel) {}

  async createUser(id: number, username: string, password: string) {
    const newUser = await this.userModel.create({ id, username, password });
    return newUser;
  }

  async getAllUsers() {
    try {
      const users = await this.userModel.findAll();
      console.log(users);
      return users;
    } catch (error) {
      throw new Error('no users to retrive');
    }
  }

  async getUser(id: number, username: string) {
    return await this.userModel.findOne({ where: { id, username } });
  }
}
