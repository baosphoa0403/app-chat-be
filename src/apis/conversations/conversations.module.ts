import { Module } from '@nestjs/common';
import { ConversationsController } from './conversations.controller';
import { ConversationsService } from './conversations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversationEntity } from './entity/conversations.entity';
import { ConversationRepository } from './conversations.repository';
import { UserEntity } from '../user/entity/user.entity';
import { UserConversationEntity } from '../user-conversations/entity/user-conversations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConversationEntity, UserEntity, UserConversationEntity])],
  controllers: [ConversationsController],
  providers: [ConversationsService, ConversationRepository],
  exports: [ConversationsService]
})
export class ConversationsModule {}
