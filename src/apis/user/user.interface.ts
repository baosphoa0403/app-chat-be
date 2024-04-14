import { BaseInterfaceRepository } from '@app/common/base/base.interface';
import { UserEntity } from '@apis/user/entity/user.entity';

export interface UserRepositoryInterface
  extends BaseInterfaceRepository<UserEntity> {
  findName(name: string): Promise<UserEntity>;
}
