import express from 'express';
import UserController from '../controllers/UserController';
import validation from '../middlewares/validation';


const router = express.Router();

const { signupValidation, loginValidation } = validation;
router.post('/auth/signup', signupValidation, new UserController().createUser);
router.post('/auth/login', loginValidation, new UserController().loginUser);

export default router;