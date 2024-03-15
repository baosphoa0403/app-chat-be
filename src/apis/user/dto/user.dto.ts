import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
export class SignUpDTO {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiHideProperty()
  roleId?: string;
}
