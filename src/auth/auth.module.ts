import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { jwtStrategy } from './strategies/jwt.strategy';
import { UserModel } from 'src/models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { jwtConfig } from './strategies/jwt.config';

@Module({
  controllers: [AuthController],
  exports: [AuthService],
  providers: [AuthService, LocalStrategy, jwtStrategy],
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forFeature([UserModel]),
    PassportModule,
    JwtModule.registerAsync(jwtConfig),
  ],
})
export class AuthModule {}
