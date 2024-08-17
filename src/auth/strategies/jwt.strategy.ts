import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class jwtStrategy  extends PassportStrategy(Strategy){
    constructor( ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "1234"
        })
    }

    validate(AuthDataDto: any) {
        console.log('inside jwt strategy');
        console.log(AuthDataDto);
        return AuthDataDto
    }
}