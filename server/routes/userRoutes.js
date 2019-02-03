import express from 'express';
import UserController from '../controllers/UserController';
import signupValidation from '../middlewares/validation';


const router = express.Router();


router.post('/auth/signup', signupValidation, new UserController().createUser);

export default router;