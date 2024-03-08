import { Module } from '@nestjs/common';
import { AttachmentsService } from './attachments.service';
import { AttachmentsController } from './attachments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { AttachmentsRepository } from '@apis/attachments/attachments.repository';
import { AttachmentsEntity } from '@apis/attachments/entity/attachments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AttachmentsEntity])],
  providers: [AttachmentsService, AttachmentsRepository],
  controllers: [AttachmentsController],
  exports: [AttachmentsService],
})
export class AttachmentsModule {}
