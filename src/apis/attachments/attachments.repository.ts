import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { AttachmentsEntity } from './entity/attachments.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttachmentsRepositoryInterface } from './attachments.interface';

@Injectable()
export class AttachmentsRepository
  extends BaseAbstractRepostitory<AttachmentsEntity>
  implements AttachmentsRepositoryInterface
{
  constructor(
    @InjectRepository(AttachmentsEntity)
    private readonly attachmentRepository: Repository<AttachmentsEntity>
  ) {
    super(attachmentRepository);
  }
}
