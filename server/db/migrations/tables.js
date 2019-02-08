import db from '../index';
import query from './index';

const usersColumn = {
  firstName: 'VARCHAR',
  lastName: 'VARCHAR',
  otherName: 'VARCHAR',
  email: 'VARCHAR',
  phoneNumber: 'VARCHAR',
  passportUrl: 'TEXT',
  password: 'VARCHAR',
  isAdmin: 'BOOLEAN DEFAULT false',
  createdAt: 'date NOT NULL DEFAULT CURRENT_DATE',
  updatedAt: 'date NOT NULL DEFAULT CURRENT_DATE',
};

const officeColumn = {
  name: 'VARCHAR',
  type: 'VARCHAR',
  createddAt: 'date NOT NULL DEFAULT CURRENT_DATE',
  updatedAt: 'date NOT NULL DEFAULT CURRENT_DATE',
};
const partyColumn = {
  name: 'VARCHAR',
  logoUrl: 'TEXT',
  hqAddress: 'TEXT',
  description: 'TEXT',
  createdAt: 'date NOT NULL DEFAULT CURRENT_DATE',
  updatedAt: 'date NOT NULL DEFAULT CURRENT_DATE',
};

const interestColumn = {
  userId: 'INT REFERENCES users (id) ON DELETE CASCADE',
  officeId: 'INT REFERENCES offices (id) ON DELETE CASCADE',
  partyId: 'INT REFERENCES parties (id) ON DELETE CASCADE',
  manifesto: 'TEXT',
  isApproved: 'BOOLEAN DEFAULT false',
  createdAt: 'date NOT NULL DEFAULT CURRENT_DATE',
  updatedAt: 'date NOT NULL DEFAULT CURRENT_DATE',
};

const voteColumn = {
  createdOn: 'date NOT NULL DEFAULT CURRENT_DATE',
  createdBy: 'INT',
  officeId: 'INT REFERENCES offices (id) ON DELETE CASCADE',
  interestId: 'INT REFERENCES interest (id) ON DELETE CASCADE',
  updatedAt: 'date NOT NULL DEFAULT CURRENT_DATE',
};


query(db, 'users', usersColumn, () => {
  console.log('user database created');
  query(db, 'parties', partyColumn, () => {
    console.log('parties database created');
    query(db, 'offices', officeColumn, () => {
      console.log('offices database created');
      query(db, 'interest', interestColumn, () => {
        console.log('interest database created');
        query(db, 'vote', voteColumn, () => {
          console.log('vote database created');
          // process.exit(-1);
        });
      });
    });
  });
});




