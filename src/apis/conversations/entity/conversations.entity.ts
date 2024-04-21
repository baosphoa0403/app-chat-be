import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserConversationEntity } from '@apis/user-conversations/entity/user-conversations.entity';
import { MessageEntity } from '@apis/messages/entity/messages.entity';

@Entity({ name: 'conversations' })
export class ConversationEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => UserConversationEntity, (UserConversations) => UserConversations.conversationEntity)
  userConversationEntities: UserConversationEntity[];

  @OneToMany(() => MessageEntity, (messageEntity) => messageEntity)
  messageEntities: MessageEntity[];
}
