

import dotenv from 'dotenv';

dotenv.config();

const connectionString = {};

connectionString.development = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
};

connectionString.production = {
  db_url: '',
};

export default connectionString;