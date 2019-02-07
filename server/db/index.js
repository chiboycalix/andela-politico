import { Pool } from 'pg';
import dotenv from 'dotenv';
import connectionString from './db_config';

dotenv.config();

const env = process.env.NODE_ENV;
let connection;

if (env === 'development') {
  connection = connectionString.development;
} else {
  connection = connectionString.production;
}
 
const pool = new Pool(connection);

export default pool;