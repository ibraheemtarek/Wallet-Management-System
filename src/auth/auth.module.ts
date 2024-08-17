import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { jwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: '1234',
      signOptions: { expiresIn: '1h'}
    }
    )
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, jwtStrategy],
})
export class AuthModule {}
