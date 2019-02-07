import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';


const app = express();

app.use(bodyParser.json());

// API routes
app.use(routes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`This App is listening on port ${PORT}`);
});

export default app;
