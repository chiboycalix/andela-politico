/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import express from 'express';
import CandidateController from '../controllers/CandidateController';


const router = express.Router();
router.post('/office/:userId/register', new CandidateController().createCandidate);

export default router;