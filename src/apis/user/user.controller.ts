import { Controller, Get } from '@nestjs/common';
import { UserService } from '@apis/user/user.service';
import { ApiTags } from '@nestjs/swagger';
import { ERole } from '@app/common/enum/role';
import { Roles } from '@app/decocrator/decorator';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @Roles(ERole.USER)
  async findAll() {
    return await this.userService.findAll();
  }
}
