import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UserEntity } from '@apis/user/entity/user.entity';

@Entity({ name: 'attachments' })
export class AttachmentsEntity extends BaseEntity {
  @Column()
  fileName: string;
  @Column()
  url: string;
  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.attachmentEntities)
  userEntity: UserEntity;
}
