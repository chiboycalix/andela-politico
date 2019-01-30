'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);

describe('Demo test', function () {
  it('This is demo test and actually tests nothing', function () {
    'one'.should.equal('one');
  });
});

describe('/POST Party Endpoint', function () {
  var correctDetails = {
    name: 'party name',
    logoUrl: 'logo.jpg'
  };
  var wrongDetails = {
    name: correctDetails.name
  };

  it('should be able to CREATE/POST a party with all required fields', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/parties').send(correctDetails).end(function (request, response) {
      response.body.should.have.property('statusMessage');
      response.body.statusMessage.should.equal('Party created successfully');
      response.statusCode.should.equal(201);
      response.body.should.be.a('object');
      done();
    });
  });

  it('should fail if the fields are not completely entered', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/parties').send(wrongDetails).end(function (request, response) {
      response.statusCode.should.equal(400);
      response.body.statusMessage.should.equal('All fields are required');
      done();
    });
  });
});
//# sourceMappingURL=partyTest.js.map