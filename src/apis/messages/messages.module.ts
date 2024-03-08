import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './entity/messages.entity';
import { MessageRepository } from './messages.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity])],
  providers: [MessagesService, MessageRepository],
  controllers: [MessagesController],
  exports: [MessagesService],
})
export class MessagesModule {}
