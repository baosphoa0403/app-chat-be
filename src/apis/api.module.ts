import { Module } from '@nestjs/common';
import { UserModule } from '@apis/user/user.module';

@Module({
  imports: [UserModule],
})
export class ApiModule {}
