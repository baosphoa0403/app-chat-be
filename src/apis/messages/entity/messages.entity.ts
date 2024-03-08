import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UserEntity } from '@apis/user/entity/user.entity';
import { ConversationEntity } from '@apis/conversations/entity/conversations.entity';

@Entity({ name: 'messages' })
export class MessageEntity extends BaseEntity {
  @Column()
  content: string;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.messageEntities)
  userEntity: UserEntity;

  @ManyToOne(() => ConversationEntity, (conversation) => conversation.userConversationEntities)
  conversationEntity: ConversationEntity;
}
