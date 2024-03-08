import { BeforeInsert, Column, Entity, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '@app/common/base/base.entity';
import { MessageEntity } from '@apis/messages/entity/messages.entity';
import { NotificationEntity } from '@apis/notifications/entity/notifications.entity';
import { ProfileEntity } from '@apis/profile/entity/profile.entity';
import { AttachmentsEntity } from '@apis/attachments/entity/attachments.entity';
import { RoleEntity } from '@apis/role/entity/role.entity';
import { UserConversationEntity } from '@apis/user-conversations/entity/user-conversations.entity';
import { UserConversationsModule } from '@apis/user-conversations/user-conversations.module';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  /** Tài khoản đăng nhập */
  @Column()
  username!: string;

  /** Mật khẩu */
  // @ApiHideProperty()
  @Column()
  @Exclude()
  password!: string;

  @BeforeInsert()
  async beforeInsert() {
    // this.password = await hash(this.password);
    console.log('beforeInsert');
  }
  // @AutoMap()
  @OneToMany(() => MessageEntity, (mess) => mess.userId)
  messageEntities: MessageEntity[];

  @OneToMany(() => NotificationEntity, (Notification) => Notification.userId)
  notificationEntities: NotificationEntity[];

  @OneToOne(() => ProfileEntity)
  @JoinColumn()
  profileEntity: ProfileEntity;


  @OneToOne(() => RoleEntity)
  @JoinColumn()
  roleEntity: RoleEntity;

  @OneToMany(() => AttachmentsEntity, (Attachment) => Attachment.userId)
  attachmentEntities: AttachmentsEntity[];

  @OneToMany(() => UserConversationEntity,(UserConversations)=>UserConversations.userId )

  userConversationEntities: UserConversationEntity[];
}
