import { Module } from '@nestjs/common';
import { UserModule } from '@apis/user/user.module';
import { RoleController } from './role/role.controller';
import { RoleModule } from './role/role.module';
import { MessagesModule } from './messages/messages.module';
import { NotificationsController } from './notifications/notifications.controller';
import { NotificationsService } from './notifications/notifications.service';
import { NotificationsModule } from './notifications/notifications.module';
import { ConversationsModule } from './conversations/conversations.module';
import { AttachmentsModule } from './attachments/attachments.module';

@Module({
  imports: [UserModule, RoleModule, MessagesModule, NotificationsModule, ConversationsModule, AttachmentsModule],
  controllers: [RoleController, NotificationsController],
  providers: [NotificationsService],
})
export class ApiModule {}
