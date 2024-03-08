import { Controller } from '@nestjs/common';
import { UserConversationsService } from '@apis/user-conversations/user-conversations.service';

@Controller('user-conversation')
export class UserConversationsController {
  constructor(private userConversationService: UserConversationsService) {}
}
