import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileEntity } from '@apis/profile/entity/profile.entity';
import { ProfileRepositoryInterface } from '@apis/profile/profile.interface';

@Injectable()
export class ProfileRepository
  extends BaseAbstractRepostitory<ProfileEntity>
  implements ProfileRepositoryInterface
{
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>
  ) {
    super(profileRepository);
  }
}
