import { Body, Controller, Post } from '@nestjs/common';
import { RoleService } from '@apis/role/role.service';
import { RoleDto } from '@apis/role/dto/role.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '@apis/auth/contants';

@Controller('role')
@ApiTags('role')
export class RoleController {
  constructor(private roleService: RoleService) {}
  @Public()
  @Post('role')
  async createRole(@Body() body: RoleDto) {
    return this.roleService.create(body);
  }
}
