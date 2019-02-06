import express from 'express';
import PartyController from '../controllers/PartyController';

const router = express.Router();

router.post('/', new PartyController().createParty);
router.get('/', new PartyController().getParties);
router.get('/:partyId', new PartyController().getParty);
router.patch('/:partyId/:partyName', new PartyController().patchParty);
router.delete('/:partyId', new PartyController().deleteParty);

export default router;