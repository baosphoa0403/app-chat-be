import { Injectable } from '@nestjs/common';
import { UserRepository } from '@apis/user/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll() {
    return await this.userRepository.findAll();
  }
}
