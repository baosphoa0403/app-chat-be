import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return JSON.parse(request.user);
});

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]): CustomDecorator => SetMetadata(ROLES_KEY, roles);
