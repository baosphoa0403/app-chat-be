import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'attachments' })
export class AttachmentsEntity extends BaseEntity {
  @Column()
  fileName: string;
  @Column()
  url: string;
}
