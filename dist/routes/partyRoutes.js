'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _PartyController = require('../controllers/PartyController');

var _PartyController2 = _interopRequireDefault(_PartyController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _PartyController2.default.creatParty);

exports.default = router;
//# sourceMappingURL=partyRoutes.js.map