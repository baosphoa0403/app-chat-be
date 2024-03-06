import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversationsService {
  constructor(private readonly conversationRepository: ConversationsService) {}
}
