import { Module } from '@nestjs/common';
import { UserModule } from '@apis/user/user.module';
import { AuthService } from '@apis/auth/auth.service';
import { AuthController } from '@apis/auth/auth.controller';
import { RoleModule } from '@apis/role/role.module';

@Module({
  imports: [UserModule, RoleModule],
  providers: [AuthService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
