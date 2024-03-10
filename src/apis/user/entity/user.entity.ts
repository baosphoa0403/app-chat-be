import { Column, Entity, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '@app/common/base/base.entity';
import { MessageEntity } from '@apis/messages/entity/messages.entity';
import { NotificationEntity } from '@apis/notifications/entity/notifications.entity';
import { ProfileEntity } from '@apis/profile/entity/profile.entity';
import { AttachmentsEntity } from '@apis/attachments/entity/attachments.entity';
import { RoleEntity } from '@apis/role/entity/role.entity';
import { UserConversationEntity } from '@apis/user-conversations/entity/user-conversations.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ name: 'role_id' })
  roleId: string;

  @Column({ name: 'profile_id', nullable: true })
  profileId: string;

  @OneToOne(() => ProfileEntity)
  @JoinColumn({ name: 'profile_id', referencedColumnName: 'id' })
  profileEntity: ProfileEntity;

  @ManyToOne(() => RoleEntity, (role) => role.userEntities)
  @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  roleEntity: RoleEntity;

  @OneToMany(() => MessageEntity, (mess) => mess.userEntity)
  messageEntities: MessageEntity[];

  @OneToMany(() => NotificationEntity, (Notification) => Notification.userEntity)
  notificationEntities: NotificationEntity[];

  @OneToMany(() => AttachmentsEntity, (Attachment) => Attachment.userEntity)
  attachmentEntities: AttachmentsEntity[];

  @OneToMany(() => UserConversationEntity, (UserConversations) => UserConversations.userEntity)
  userConversationEntities: UserConversationEntity[];
}
