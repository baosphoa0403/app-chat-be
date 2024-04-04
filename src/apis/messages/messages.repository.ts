import { BaseAbstractRepository } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { MessageEntity } from './entity/messages.entity';
import { MessageRepositoryInterface } from './messages.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessageRepository extends BaseAbstractRepository<MessageEntity> implements MessageRepositoryInterface {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>
  ) {
    super(messageRepository);
  }
}
