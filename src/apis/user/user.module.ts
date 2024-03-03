import { Module } from '@nestjs/common';
import { UserController } from '@apis/user/user.controller';
import { UserService } from '@apis/user/user.service';
import { UserEntity } from '@apis/user/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '@apis/user/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
