'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _partyRoutes = require('./routes/partyRoutes');

var _partyRoutes2 = _interopRequireDefault(_partyRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

// API routes
app.use('/api/v1/parties', _partyRoutes2.default);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});

exports.default = app;
//# sourceMappingURL=app.js.map