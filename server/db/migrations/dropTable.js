/* eslint-disable consistent-return */
import db from '../index';

const tableNames = ['users', 'parties', 'offices', 'candidate', 'vote'];


db.connect((error, client) => {
  if (error) throw error;
  for (let i = 0; i < tableNames.length; i += 1) {
    const query = `DROP TABLE IF EXISTS ${tableNames[i]} CASCADE`;
    client.query(query, (error) => {
      if (error) throw error;
    });
  }
});

db.end();