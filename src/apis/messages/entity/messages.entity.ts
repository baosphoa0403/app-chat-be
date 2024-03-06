import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'messages' })
export class MessageEntity extends BaseEntity {
  @Column()
  content: string;
}
