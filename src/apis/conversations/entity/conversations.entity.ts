import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'conversation' })
export class ConversationEntity extends BaseEntity {
  @Column()
  name: string;
}
