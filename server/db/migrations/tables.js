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

const candidateColumn = {
  userId: 'INT REFERENCES users (id) ON DELETE CASCADE',
  officeId: 'INT REFERENCES offices (id) ON DELETE CASCADE',
  partyId: 'INT REFERENCES parties (id) ON DELETE CASCADE',
  manifesto: 'TEXT',
  createdAt: 'date NOT NULL DEFAULT CURRENT_DATE',
  updatedAt: 'date NOT NULL DEFAULT CURRENT_DATE',
};

const voteColumn = {
  createdOn: 'date NOT NULL DEFAULT CURRENT_DATE',
  createdBy: 'INT',
  officeId: 'INT REFERENCES offices (id) ON DELETE CASCADE',
  candidateId: 'INT REFERENCES candidate (id) ON DELETE CASCADE',
  updatedAt: 'date NOT NULL DEFAULT CURRENT_DATE',
};


query(db, 'users', usersColumn, () => {
  query(db, 'parties', partyColumn);
  query(db, 'offices', officeColumn);
  query(db, 'candidate', candidateColumn);
  query(db, 'vote', voteColumn);
  db.end();
});