import { Client } from 'pg';
import dotenv from 'dotenv';
import connectionString from './db_config';

dotenv.config();

export default (() => {
  const env = process.env.NODE_ENV;

  if (env === 'development') {
    return new Client(connectionString.development);
  }
  return new Client(connectionString.production);
})();
