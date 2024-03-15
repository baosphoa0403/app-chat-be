import { Injectable } from '@nestjs/common';
import { RoleRepository } from './role.repository';
import { ERole } from '@app/common/enum/role';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}
  async findRoleByName(name: ERole) {
    return await this.roleRepository.findByCondition({ where: { name } });
  }
}
