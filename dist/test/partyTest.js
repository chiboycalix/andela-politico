'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);

describe('Demo test', function () {
  it('This is demo test and actually tests nothing', function () {
    'one'.should.equal('one');
  });
});
//# sourceMappingURL=partyTest.js.map