import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { ProfileRepositoy } from './profile.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepositoy],
  exports: [ProfileService],
})
export class ProfileModule {}
