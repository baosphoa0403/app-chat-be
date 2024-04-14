import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './configuration';

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
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
        JWT_EXPIRES_IN: Joi.string().required()
      })
    })
  ]
})
export class ConfigModule {}
