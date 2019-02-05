'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import partyRoutes from './routes/partyRoutes';
// import officeRoute from './routes/officeRoutes';

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

// API routes
// app.use('/api/v1/parties', partyRoutes);
// app.use('/api/v1/offices', officeRoute);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('This App listening on port ' + PORT);
});

exports.default = app;
//# sourceMappingURL=app.js.map