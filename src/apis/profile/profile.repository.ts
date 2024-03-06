import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { ProfileEntity } from './entity/profile.entity';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileRepositoryInterface } from './profile.interface';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileRepositoy extends BaseAbstractRepostitory<ProfileEntity> implements ProfileRepositoryInterface {
  constructor(@InjectRepository(ProfileEntity) private readonly profileResitory: Repository<ProfileEntity>) {
    super(profileResitory);
  }
}