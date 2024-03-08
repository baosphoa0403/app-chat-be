import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '@app/common/base/base.entity';
import { UserEntity } from '@apis/user/entity/user.entity';
import { ConversationEntity } from '@apis/conversations/entity/conversations.entity';
import { MessageEntity } from '@apis/messages/entity/messages.entity';

@Entity({ name: 'user-conversation' })
export class UserConversationEntity extends BaseEntity {
  @Column()
  userId: string;
  @Column()
  conversationID: string;

  @ManyToOne(() => UserEntity, (user) => user.userConversationEntities)
  userEntity: UserEntity;

  @ManyToOne(() => ConversationEntity, (conversation) => conversation.userConversationEntities)
  conversationEntity: ConversationEntity;

  @OneToMany(() => MessageEntity, (mess) => mess.userId)
  messageEntities: MessageEntity[];
}
