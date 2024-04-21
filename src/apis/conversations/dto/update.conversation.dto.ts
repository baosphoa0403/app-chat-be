import { ApiProperty } from '@nestjs/swagger';

export class UpdateConversationDTO {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  conversationId: string;

  @ApiProperty()
  name: string;
}
