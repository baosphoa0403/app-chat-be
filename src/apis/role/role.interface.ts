import { BaseInterfaceRepository } from '@app/common/base/base.interface';
import { RoleEntity } from './entity/role.entity';

export interface RoleRepositoryInterface
  extends BaseInterfaceRepository<RoleEntity> {}
