import { Module } from '@nestjs/common';
import { ApiModule } from '@apis/api.module';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { DatabaseModule } from '@modules/database/database.module';
import { ConfigModule } from '@modules/config/config.module';
import { ProfileModule } from './apis/profile/profile.module';

@Module({
  imports: [ConfigModule, ApiModule, DatabaseModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
