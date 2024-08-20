import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './models/user.model';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '852654As',
    database: 'postgres',
    models: [ UserModel ],
    autoLoadModels: true,
    synchronize: true
  }),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
