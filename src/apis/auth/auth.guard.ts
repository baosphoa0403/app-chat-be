import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@apis/user/user.service';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '@apis/auth/contants';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { Payload } from '@apis/auth/auth.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private reflector: Reflector,
    private configService: ConfigService
  ) {}

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (isPublic) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const secret = this.configService.get('jwt.secret');
      const payload: Payload = await this.jwtService.verifyAsync(token, {
        secret: secret
      });
      const user = await this.userService.findById(payload.id);
      request['user'] = JSON.stringify(user);
    } catch (error) {
      throw error;
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    if (request.cookies && request.cookies.access_token) {
      // get cookie from request
      return request.cookies.access_token;
    }
    return null;
  }
}
