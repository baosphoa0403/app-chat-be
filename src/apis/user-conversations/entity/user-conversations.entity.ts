import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from '@apis/user/entity/user.entity';
import { ConversationEntity } from '@apis/conversations/entity/conversations.entity';
import { BaseEntity as TypeormBaseEntity } from 'typeorm/repository/BaseEntity';
import { EStatus } from '@app/common/enum/status-userconversation';

@Entity({ name: 'user_conversation' })
export class UserConversationEntity extends TypeormBaseEntity {
  @PrimaryColumn({ name: 'user_id' })
  userId: string;

  @PrimaryColumn({ name: 'conversation_id' })
  conversationID: string;

  @Column()
  status:EStatus;

  @ManyToOne(() => UserEntity, (user) => user.userConversationEntities)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  userEntity: UserEntity;

  @ManyToOne(() => ConversationEntity, (conversation) => conversation.userConversationEntities)
  @JoinColumn({ name: 'conversation_id', referencedColumnName: 'id' })
  conversationEntity: ConversationEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
