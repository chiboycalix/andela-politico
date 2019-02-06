import express from 'express';
import auth from '../middlewares/auth';
import CandidateController from '../controllers/CandidateController';

const router = express.Router();

router.post('/office/:userId/register', auth.verifyUserToken, new CandidateController().createCandidate);

export default router;