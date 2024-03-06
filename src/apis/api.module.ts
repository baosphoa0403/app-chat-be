import { Module } from '@nestjs/common';
import { UserModule } from '@apis/user/user.module';
import { MessagesModule } from '@apis/messages/messages.module';
import { NotificationsModule } from '@apis/notifications/notifications.module';
import { ConversationsModule } from '@apis/conversations/conversations.module';
import { AttachmentsModule } from '@apis/attachments/attachments.module';
import { RoleModule } from '@apis/role/role.module';

@Module({
  imports: [UserModule, RoleModule, MessagesModule, NotificationsModule, ConversationsModule, AttachmentsModule],
})
export class ApiModule {}
