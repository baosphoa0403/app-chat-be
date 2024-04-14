import { BaseInterfaceRepository } from '@app/common/base/base.interface';
import { ProfileEntity } from '@apis/profile/entity/profile.entity';

export interface ProfileRepositoryInterface
  extends BaseInterfaceRepository<ProfileEntity> {}
