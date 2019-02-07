import express from 'express';
import officeRoutes from './officeRoutes';
import partiesRoutes from './partyRoutes';
import userRoutes from './userRoutes';
import candidateRoutes from './candidateRoutes';

const router = express.Router();

router.use('/api/v1/offices', officeRoutes);
router.use('/api/v1/parties', partiesRoutes);
router.use('/api/v1/auth', userRoutes);
router.use('/api/v1', candidateRoutes);

export default router;