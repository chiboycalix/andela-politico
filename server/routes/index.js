import express from 'express';

import officeRouter from './officeRoutes';
import partyRouter from './partyRoutes';
import userRoute from './userRoutes';
import candidateRoute from './candidateRoutes';

const router = express.Router();

router.use('/api/v1/', officeRouter);
router.use('/api/v1/', partyRouter);
router.use('/api/v1/', userRoute);
router.use('/api/v1/', candidateRoute);

export default router;