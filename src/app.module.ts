import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { DatabaseModule } from '@modules/database/database.module';
import { ConfigModule } from '@modules/config/config.module';
import { JwtModuleShared } from '@modules/share/jwt/jwt.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@apis/auth/auth.guard';
import { RolesGuard } from '@app/guards/role.guard';
import { AllExceptionsFilter } from '@app/fillter/http-exception.filter';
import { ApiModule } from '@apis/api.module';

@Module({
  imports: [ConfigModule, JwtModuleShared, DatabaseModule, ApiModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
