import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'roles' })
export class RoleEntity extends BaseEntity {
  @Column()
  name: string;
}
