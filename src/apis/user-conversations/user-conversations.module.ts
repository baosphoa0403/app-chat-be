import { Module } from '@nestjs/common';
import { UserConversationsController } from './user-conversations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserConversationEntity } from '@apis/user-conversations/entity/user-conversations.entity';
import { UserConversationsService } from '@apis/user-conversations/user-conversations.service';
import { userConversationsRepository } from './user-conversations.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserConversationEntity])],
  controllers: [UserConversationsController],
  providers: [UserConversationsService, userConversationsRepository],
  exports: [UserConversationsService]
})
export class UserConversationsModule {}
