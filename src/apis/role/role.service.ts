import { Injectable } from '@nestjs/common';
import { RoleRepository } from './role.repository';
import { ERole } from '@app/common/enum/role';
import { RoleDto } from '@apis/role/dto/role.dto';
import { DeepPartial } from 'typeorm';
import { RoleEntity } from '@apis/role/entity/role.entity';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}
  async findRoleByName(name: ERole) {
    return await this.roleRepository.findByCondition({ where: { name } });
  }

  async create(dto: RoleDto) {
    const partialEntity: DeepPartial<RoleEntity> = {
      name: dto.name
    };
    return await this.roleRepository.save(partialEntity);
  }
}
