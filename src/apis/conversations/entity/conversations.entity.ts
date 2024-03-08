import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { UserConversationEntity } from '@apis/user-conversations/entity/user-conversations.entity';

@Entity({ name: 'conversations' })
export class ConversationEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => UserConversationEntity, (UserConversations) => UserConversations.conversationID)
  userConversationEntities: UserConversationEntity[];
}
