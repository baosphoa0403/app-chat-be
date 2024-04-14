import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { MessageEntity } from './entity/messages.entity';
import { MessageRepositoryInterface } from './messages.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessageRepository
  extends BaseAbstractRepostitory<MessageEntity>
  implements MessageRepositoryInterface
{
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageReponsitory: Repository<MessageEntity>
  ) {
    super(messageReponsitory);
  }
}
