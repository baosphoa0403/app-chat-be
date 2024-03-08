import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { UserConversationEntity } from '@apis/user-conversations/entity/user-conversations.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserConversationsRepositoryInterface } from '@apis/user-conversations/user-conversations.interface';

@Injectable()
export class UserConversationsRepository extends BaseAbstractRepostitory<UserConversationEntity> implements UserConversationsRepositoryInterface {
  constructor(@InjectRepository(UserConversationEntity) private readonly userConversationRepository: Repository<UserConversationEntity>) {
    super(userConversationRepository);
  }
}
