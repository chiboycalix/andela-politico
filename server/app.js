import express from 'express';
import bodyParser from 'body-parser';
import partyRoutes from './routes/partyRoutes';
import officeRoute from './routes/officeRoutes';

const app = express();

app.use(bodyParser.json());

// API routes
app.use('/api/v1/parties', partyRoutes);
app.use('/api/v1/offices', officeRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

export default app;
