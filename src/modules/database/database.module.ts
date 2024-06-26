import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log(configService.get<string>('db'));
        return {
          type: 'postgres',
          host: configService.get<string>('db.host'),
          port: configService.get<number>('db.port'),
          username: configService.get<string>('db.username'),
          password: configService.get<string>('db.password'),
          database: configService.get<string>('db.database'),
          schema: configService.get<string>('db.schema'),
          autoLoadEntities: true,
          migrationsTableName: `migrations_app_chat`,
          synchronize: false,
          logging: true
        };
      }
    })
  ]
})
export class DatabaseModule {}
