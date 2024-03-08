import { Injectable } from '@nestjs/common';
import { UserConversationsRepository } from '@apis/user-conversations/user-conversations.repository';

@Injectable()
export class UserConversationsService {
  constructor(private readonly userConversationsRepository: UserConversationsRepository) {}
}
