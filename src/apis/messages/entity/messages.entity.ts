import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { UserEntity } from '@apis/user/entity/user.entity';
import { ConversationEntity } from '@apis/conversations/entity/conversations.entity';
import { BaseEntity as TypeormBaseEntity } from 'typeorm/repository/BaseEntity';

@Entity({ name: 'messages' })
export class MessageEntity extends TypeormBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  content: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'conversation_id' })
  conversationId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => MessageEntity, (message) => message.messageEntity)
  @JoinColumn()
  messageEntity: MessageEntity;

  @ManyToOne(() => UserEntity, (user) => user.messageEntities)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  userEntity: UserEntity;

  @ManyToOne(
    () => ConversationEntity,
    (conversation) => conversation.userConversationEntities
  )
  @JoinColumn({ name: 'conversation_id', referencedColumnName: 'id' })
  conversationEntity: ConversationEntity;
}
