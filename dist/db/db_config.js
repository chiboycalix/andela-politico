'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pg = require('pg');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

console.log(process.env.NODE_ENV);

var client = new _pg.Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT
});

client.connect();

client.query('SELECT NOW()', function (err, res) {
  // console.log(err, res);
  client.end();
});

exports.default = client;
//# sourceMappingURL=db_config.js.map