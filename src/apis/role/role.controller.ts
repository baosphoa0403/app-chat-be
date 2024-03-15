import { Controller } from '@nestjs/common';
import { RoleService } from '@apis/role/role.service';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}
}
