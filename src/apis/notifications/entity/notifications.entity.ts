import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'notifications' })
export class NotificationEntiy extends BaseEntity {
  @Column()
  content: string;
}
