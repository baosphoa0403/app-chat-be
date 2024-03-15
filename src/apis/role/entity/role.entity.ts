import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '@apis/user/entity/user.entity';
import { BaseEntity as TypeormBaseEntity } from 'typeorm/repository/BaseEntity';
import { ERole } from '@app/common/enum/role';

@Entity({ name: 'roles' })
export class RoleEntity extends TypeormBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ enum: ERole, type: 'enum' })
  name: ERole;

  @OneToMany(() => UserEntity, (users) => users.roleEntity)
  userEntities: UserEntity[];
}
