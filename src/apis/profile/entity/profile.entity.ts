import { BaseEntity } from '@app/common/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'profiles' })
export class ProfileEntity extends BaseEntity {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  avatar: string;
  @Column()
  dateOfBirth: Date;
  @Column()
  gender: string;
  @Column()
  bio: string;
  @Column()
  lastActive: Date;
  @Column()
  address: string;
  @Column()
  email: string;
}
