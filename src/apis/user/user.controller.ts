import { Controller, Get } from '@nestjs/common';
import { UserService } from '@apis/user/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
