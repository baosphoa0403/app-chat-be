import { Injectable } from '@nestjs/common';
import { UserRepository } from '@apis/user/user.repository';
import { SignUpDTO } from '@apis/user/dto/user.dto';
import { RoleEntity } from '@apis/role/entity/role.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findUserByName(username: string) {
    return await this.userRepository.findByCondition({ where: { username } });
  }

  async findUser(username: string) {
    return await this.userRepository.findUserRoleByName(username);
  }

  async findById(userId: string) {
    return await this.userRepository.findByCondition({
      where: { id: userId },
      relations: { roleEntity: true },
    });
  }

  async create(dto: SignUpDTO, roleEntity: RoleEntity) {
    const payload = {
      username: dto.username,
      password: dto.password,
      roleEntity,
    };
    return await this.userRepository.save(payload);
  }
}
