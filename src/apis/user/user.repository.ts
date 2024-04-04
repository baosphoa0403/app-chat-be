import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '@apis/user/entity/user.entity';
import { BaseAbstractRepository } from '@app/common/base/base.repository';
import { UserRepositoryInterface } from '@apis/user/user.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends BaseAbstractRepository<UserEntity> implements UserRepositoryInterface {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {
    super(userRepository);
  }

  findName(): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  async findUserRoleByName(username: string): Promise<UserEntity> {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roleEntity', 'roleEntity')
      .where('user.username = :username', { username })
      .getOne();
  }
}
