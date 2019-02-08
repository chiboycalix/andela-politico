import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../app';


// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

// describe('offices', () => {
//   beforeEach((done) => { //Before each test we empty the database
//       Book.remove({}, (err) => { 
//          done();           
//       });        
//   });

// describe('/GET office', () => {
//   const correctDetails = {
//     type: 'logo.jpg',
//     name: 'office name',
//   };
//   const wrongDetails = {
//     name: 'party name',
//   };

//   it('should not get all offices', (done) => {
//     chai.request(server)
//       .('/api/v1/offices')
//       .send(wrongDetails)
//       .end((request, response) => {
//         response.body.should.have.property('statusMessage');
//         response.body.statusMessage.should.equal('All fields are required');
//         response.should.have.status(400);
//         done();
//       });
//   });
  
//   it('it should be able to POST a party with all fields being entered', (done) => {
//     chai.request(server)
//       .post('/api/v1/offices')
//       .send(correctDetails)
//       .end((request, response) => {
//         response.body.statusMessage.should.equal('Office created successfully');
//         response.should.have.status(201);
//         response.body.should.have.property('statusMessage');
//         response.body.should.be.a('object');
//         done();
//       });
//   });
// });



describe('/GET offices', () => {
  it('it should be able GET all offices', (done) => {
    chai.request(server)
      .get('/api/v1/offices')
      .end((request, response) => {
        response.should.have.status(200);
        done();
      });
  });
});

// describe('/GET/:officeId office', () => {
//   const validOffice = {
//     id: 1,
//     name: 'party name',
//     type: 'chi.jpg',
//   };
//   const invalidOffice = {
//     name: 'party name',
//     type: 'chi.jpg',
//   };
  
//   it('it should be able GET a party', (done) => {
//     chai.request(server)
//       .get(`/api/v1/offices/${validOffice.id}`)
//       .end((request, response) => {
//         response.should.have.status(200);
//         response.body.should.be.a('Object');
//         response.body.should.have.property('statusMessage');
//         response.body.statusMessage.should.equal('success');
//         done();
//       });
//   });
  
//   it('should only return a valid party', (done) => {
//     chai.request(server)
//       .get(`/api/v1/offices/${invalidOffice.id}`)
//       .end((request, response) => {
//         response.should.have.status(404);
//         response.body.should.have.property('statusMessage');
//         response.body.statusMessage.should.equal('Office does not exist');
//         done();
//       });
//   });
// });

// describe('/GET offices', () => {
//   beforeEach((done) => {
//     offices.splice(0, offices.length);
//     offices.length = 0;
//     done();
//   });
//   it('it should return an empty array if there is no office present', (done) => {
//     chai.request(server)
//       .get('/api/v1/offices')
//       .send(offices)
//       .end((request, response) => {
//         response.should.have.status(404);
//         response.body.should.have.property('statusMessage');
//         response.body.statusMessage.should.equal('No Office in your database');
//         response.body.should.have.property('data');
//         response.body.data.should.be.a('array');
//         response.body.data.length.should.be.equal(0);
//         done();
//       });
//   });
// });

