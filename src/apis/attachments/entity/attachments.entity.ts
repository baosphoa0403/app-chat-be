import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '@apis/user/entity/user.entity';

@Entity({ name: 'attachments' })
export class AttachmentsEntity extends BaseEntity {
  @Column()
  fileName: string;

  @Column()
  url: string;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.attachmentEntities)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  userEntity: UserEntity;
}
