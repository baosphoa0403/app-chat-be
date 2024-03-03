import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string(),
        APP_PORT: Joi.number(),

        POSTGRES_HOST: Joi.string(),
        POSTGRES_PORT: Joi.number(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        DB_SCHEMA: Joi.string().required(),

        SECRET_JWT: Joi.string().required(),
      }),
    }),
  ],
})
export class ConfigModule {}
