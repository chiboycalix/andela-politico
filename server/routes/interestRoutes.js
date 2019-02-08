import express from 'express';
import InterestController from '../controllers/InterestController';
import auth from '../middlewares/auth';


const router = express.Router();
router.post('/office/:userId/register', auth.verifyUserToken, new InterestController().createInterest);


export default router;