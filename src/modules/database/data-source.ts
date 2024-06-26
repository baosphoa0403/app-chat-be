import { DataSource, DataSourceOptions } from 'typeorm';
import * as process from 'process';
import * as dotenv from 'dotenv';
import * as path from 'path';

const pathJoin = path.resolve(__dirname, `../../../.env.dev`);
dotenv.config({ path: pathJoin });
export const configTypeorm = {
  type: 'postgres',
  autoLoadEntities: true,
  migrationsTableName: `migrations_app_chat`,
  synchronize: false,
  logging: true,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  schema: process.env.DB_SCHEMA,
  migrations: [process.cwd() + '/dist/modules/database/migrations/*.js'],
  entities: [process.cwd() + '/dist/apis/**/*.entity.js']
};

const connectionSource = new DataSource(configTypeorm as DataSourceOptions);

export const runMigration = () => {
  connectionSource.initialize().then(async () => {
    if (connectionSource.isInitialized) {
      console.info('run migrate');
      const migrations = await connectionSource.runMigrations();
      console.table(migrations);
    }
  });
};

export default connectionSource;
