import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class jwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('inside jwt auth guard');
        return super.canActivate(context);
    }
}