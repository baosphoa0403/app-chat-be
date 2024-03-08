import { Module } from '@nestjs/common';
import { UserConversationsController } from './user-conversations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserConversationsRepository } from '@apis/user-conversations/user-conversations.repository';
import { UserConversationEntity } from '@apis/user-conversations/entity/user-conversations.entity';
import { UserConversationsService } from '@apis/user-conversations/user-conversations.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserConversationEntity])],
  controllers: [UserConversationsController],
  providers: [UserConversationsService, UserConversationsRepository],
  exports: [UserConversationsService],
})
export class UserConversationsModule {}
