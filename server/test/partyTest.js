import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';


// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

describe('Demo test', () => {
  it('This is demo test and actually tests nothing', () => {
    ('one').should.equal('one');
  });
});

describe('/POST Party Endpoint', () => {
  const correctDetails = {
    name: 'party name',
    logoUrl: 'logo.jpg',
  };
  const wrongDetails = {
    name: correctDetails.name,
  };

  it('should be able to CREATE/POST a party with all required fields', (done) => {
    chai.request(server)
      .post('/api/v1/parties')
      .send(correctDetails)
      .end((request, response) => {
        response.body.should.have.property('statusMessage');
        response.body.statusMessage.should.equal('Party created successfully');
        response.statusCode.should.equal(201);
        response.body.should.be.a('object');
        done();
      });
  });

  it('should fail if the fields are not completely entered', (done) => {
    chai.request(server)
      .post('/api/v1/parties')
      .send(wrongDetails)
      .end((request, response) => {
        response.statusCode.should.equal(400);
        response.body.statusMessage.should.equal('All fields are required');
        response.body.data.should.be.a('array');
        response.body.data.length.should.be.equal(0);
        done();
      });
  });
});


describe('/GET parties', () => {
  it('it should be able GET all parties', (done) => {
    chai.request(server)
      .get('/api/v1/parties')
      .end((request, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        done();
      });
  });
});

describe('/GET/:partyId party', () => {
  const validParty = {
    id: 1,
    name: 'party name',
    logoUrl: 'chi.jpg',
  };
  const invalidParty = {
    name: 'party name',
    logoUrl: 'chi.jpg',
  };

  it('it should be able GET a party', (done) => {
    chai.request(server)
      .get(`/api/v1/parties/${validParty.id}`)
      .end((request, response) => {
        response.should.have.status(200);
        done();
      });
  });

  it('should only return a valid party', (done) => {
    chai.request(server)
      .get(`/api/v1/parties/${invalidParty.id}`)
      .end((request, response) => {
        response.should.have.status(404);
        response.body.statusMessage.should.equal('Party does not exist');
        done();
      });
  });
});

describe('/PATCH a Party', () => {
  const validParty = {
    id: 1,
    name: 'calix',
  };
  const editedvalidParty = {
    id: validParty.id,
    name: `${validParty.name}cgh`,
  };

  it('should be able to edit a parties name', (done) => {
    chai.request(server)
      .patch(`/api/v1/parties/${validParty.id}/${validParty.name}`)
      .send(editedvalidParty)
      .end((request, response) => {
        response.should.have.status(200);
        response.body.statusMessage.should.equal('Party updated successfully');
        done();
      });
  });
});

describe('/Delete party', () => {
  const deleteParty = {
    id: 1,
    name: 'calix',
  };
  it('should delete a party', (done) => {
    chai.request(server)
      .delete(`/api/v1/parties/${deleteParty.id}`)
      .end((request, response) => {
        response.should.have.status(404);
        response.body.statusMessage.should.equal('party does not exist');
        done();
      });
  });
});