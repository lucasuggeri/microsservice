const config = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  db_hostname: process.env.DATABASE_HOSTNAME,
  db_port: process.env.DATABASE_PORT,
  db_username: process.env.DATABASE_USERNAME,
  db_password: process.env.DATABASE_PASSWORD,
  db_database: process.env.DATABASE_DATABASE,
};

export default config;
