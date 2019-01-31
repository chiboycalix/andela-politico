import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../app';

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);


describe('/POST office', () => {
  const correctDetails = {
    type: 'logo.jpg',
    name: 'office name',
  };
  const wrongDetails = {
    name: 'party name',
  };
  
  it('it should be able to POST a party with all fields being entered', (done) => {
    chai.request(server)
      .post('/api/v1/offices')
      .send(correctDetails)
      .end((request, response) => {
        response.body.statusMessage.should.equal('Office created successfully');
        response.should.have.status(201);
        done();
      });
  });
  
  it('should not post an Office with a missing field', (done) => {
    chai.request(server)
      .post('/api/v1/offices')
      .send(wrongDetails)
      .end((request, response) => {
        response.body.statusMessage.should.equal('All fields are required');
        response.should.have.status(400);
        done();
      });
  });
});