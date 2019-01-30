import express from 'express';
import PartyController from '../controllers/PartyController';

const router = express.Router();


router.post('/', PartyController.creatParty);
router.get('/', PartyController.getParties);
router.get('/:partyId', PartyController.getParty);

export default router;