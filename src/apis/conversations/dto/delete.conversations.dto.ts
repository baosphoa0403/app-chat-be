import { ApiProperty } from '@nestjs/swagger';

export class DeleteConversationDTO {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  conversationId: string;
}
