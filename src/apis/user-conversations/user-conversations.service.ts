import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { userConversationsRepository } from './user-conversations.repository';

@Injectable()
export class UserConversationsService {
  constructor(private readonly userConversationsRepository: userConversationsRepository) {}
}
