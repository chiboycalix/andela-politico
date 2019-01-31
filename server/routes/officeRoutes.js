import express from 'express';
import officeController from '../controllers/OfficeController';


const router = express.Router();

router.post('/', officeController.createOffice);



export default router;