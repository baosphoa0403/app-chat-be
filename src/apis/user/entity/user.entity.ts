import { BeforeInsert, Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '@app/common/base/base.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  /** Tài khoản đăng nhập */
  @Column()
  username!: string;

  /** Mật khẩu */
  // @ApiHideProperty()
  @Column()
  @Exclude()
  password!: string;

  @BeforeInsert()
  async beforeInsert() {
    // this.password = await hash(this.password);
    console.log('beforeInsert');
  }
}
