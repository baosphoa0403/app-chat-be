import { ApiProperty } from '@nestjs/swagger';

export class ConversationDTO {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  name: string;
}
