export default () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.APP_PORT, 10) || 3000,
  db: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    schema: process.env.DB_SCHEMA
  },
  jwt: {
    secret: process.env.SECRET_JWT,
    expiresIn: process.env.JWT_EXPIRES_IN
  }
});
