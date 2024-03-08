import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UserEntity } from '@apis/user/entity/user.entity';

@Entity({ name: 'notifications' })
export class NotificationEntity extends BaseEntity {
  @Column()
  content: string;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.notificationEntities)
  userEntity: UserEntity;
}
