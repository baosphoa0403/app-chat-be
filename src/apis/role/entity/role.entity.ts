import { BaseEntity } from '@app/common/base/base.entity';
import { Column } from 'typeorm';

export class RoleEntity extends BaseEntity {
  @Column()
  name: string;
}
