import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '@apis/user/entity/user.entity';

@Entity({ name: 'notifications' })
export class NotificationEntity extends BaseEntity {
  @Column()
  content: string;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.notificationEntities)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  userEntity: UserEntity;
}
