import { Injectable } from '@nestjs/common';
import { ConversationRepository } from './conversations.repository';

@Injectable()
export class ConversationsService {
  constructor(private readonly conversationRepository: ConversationRepository) {}
}
