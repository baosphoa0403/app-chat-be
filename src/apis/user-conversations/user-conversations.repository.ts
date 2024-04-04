import { UserConversationEntity } from '@apis/user-conversations/entity/user-conversations.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserConversationsRepositoryInterface } from './user-conversations.interface';
import { BaseAbstractRepository } from '@app/common/base/base.repository';

@Injectable()
export class userConversationsRepository
  extends BaseAbstractRepository<UserConversationEntity>
  implements UserConversationsRepositoryInterface
{
  constructor(
    @InjectRepository(UserConversationEntity)
    private readonly userConversationRepository: Repository<UserConversationEntity>
  ) {
    super(userConversationRepository);
  }
}
