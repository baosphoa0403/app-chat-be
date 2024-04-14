import { ApiProperty } from '@nestjs/swagger';
import { ERole } from '@app/common/enum/role';

export class RoleDto {
  @ApiProperty()
  name: ERole;
}
