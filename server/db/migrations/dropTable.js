/* eslint-disable consistent-return */
import db from '../index';

const tableNames = ['users', 'parties', 'offices', 'candidate', 'vote'];

// const query1 = 'DROP TABLE IF EXISTS users CASCADE';
// const query2 = 'DROP TABLE IF EXISTS parties CASCADE';
// const query3 = 'DROP TABLE IF EXISTS offices CASCADE';
// const query4 = 'DROP TABLE IF EXISTS candidate CASCADE';
// const query5 = 'DROP TABLE IF EXISTS vote CASCADE';

// db.query(query1, (error) => {
//   if (error) throw error;
//   db.query(query2, (error) => {
//     if (error) throw error;
//     db.query(query3, (error) => {
//       if (error) throw error;
//       db.query(query4, (error) => {
//         if (error) throw error;
//         db.query(query5, (error) => {
//           if (error) throw error;
//         });
//       });
//     });
//   });
// });

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