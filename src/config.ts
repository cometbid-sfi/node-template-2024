const config = {
  env: process.env.NODE_ENV || "development",
  debug: process.env.APP_DEBUG === "true",
  port: parseInt(process.env.PORT || "3000"),

  getDatabaseConfig: () => ({
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    database: process.env.DB_NAME || "postgres",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
  }),
};

export default config;
