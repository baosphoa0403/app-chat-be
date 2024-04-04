import { Injectable } from '@nestjs/common';
import { userConversationsRepository } from './user-conversations.repository';

@Injectable()
export class UserConversationsService {
  constructor(private readonly userConversationsRepository: userConversationsRepository) {}
}
