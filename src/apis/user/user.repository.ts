import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { UserEntity } from '@apis/user/entity/user.entity';
import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { UserRepositoryInterface } from '@apis/user/user.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends BaseAbstractRepostitory<UserEntity> implements UserRepositoryInterface {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
    super(userRepository);
  }

  findName(name: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
}
