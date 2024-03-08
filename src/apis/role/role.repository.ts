import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { RoleRepositoryInterface } from './role.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './entity/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleRepository extends BaseAbstractRepostitory<RoleEntity> implements RoleRepositoryInterface {
  constructor(@InjectRepository(RoleEntity) private readonly roleRepository: Repository<RoleEntity>) {
    super(roleRepository);
  }
}
