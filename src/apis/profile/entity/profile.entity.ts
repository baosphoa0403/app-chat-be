import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'profile' })
export class ProfileEntity extends BaseEntity {
  @Column()
  firtName: string;
  @Column()
  lastName: string;
  @Column()
  avatar: string;
  @Column()
  dateOfBirth: Date;
  @Column()
  gender: string;
  @Column()
  Bio: string;
  @Column()
  lastActive: Date;
  @Column()
  Address: string;
  @Column()
  Email: string;
}
