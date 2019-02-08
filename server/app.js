import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoutes';
import partyRoutes from './routes/partyRoutes';
import officeRoute from './routes/officeRoutes';
import interestRoute from './routes/interestRoutes';


const app = express();

app.use(bodyParser.json());

// API routes
app.use('/api/v1', userRoute);
app.use('/api/v1/parties', partyRoutes);
app.use('/api/v1/offices', officeRoute);
app.use('/api/v1', interestRoute);

const PORT = process.env.PORT || 5060;
app.listen(PORT, () => {
  console.log(`This App is listening on port ${PORT}`);
});

export default app;
