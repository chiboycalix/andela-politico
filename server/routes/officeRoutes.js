import express from 'express';
import OfficeController from '../controllers/OfficeController';


const router = express.Router();

router.post('/', OfficeController.createOffice);



export default router;