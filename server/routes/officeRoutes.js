import express from 'express';
import OfficeController from '../controllers/OfficeController';


const router = express.Router();

router.post('/', new OfficeController().createOffice);
router.get('/', new OfficeController().getOffices);
router.get('/:officeId', new OfficeController().getOffice);



export default router;