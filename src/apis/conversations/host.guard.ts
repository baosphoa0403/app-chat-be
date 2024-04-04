import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConversationsService } from './conversations.service';

@Injectable()
export class ConversationPermissionGuard implements CanActivate {
  constructor(private readonly reflector: Reflector, private readonly conversationService: ConversationsService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.body.userId;
    const conversationId = request.body.conversationId;
    return this.conversationService.hasConversationPermission(userId, conversationId);
  }
}
