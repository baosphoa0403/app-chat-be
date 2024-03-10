import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { ConversationEntity } from './entity/conversations.entity';
import { ConversationsRepositoryInterface } from './conversations.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConversationRepository extends BaseAbstractRepostitory<ConversationEntity> implements ConversationsRepositoryInterface {
  constructor(@InjectRepository(ConversationEntity) private readonly userRepository: Repository<ConversationEntity>) {
    super(userRepository);
  }
}
