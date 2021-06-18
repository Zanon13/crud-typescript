import express from 'express';
import config from './config/config';
import clientRouter from './routes/clientRoutes';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', clientRouter);

app.listen(config.server.port, () => {
  console.log(`Server running on ${config.server.hostname}:${config.server.port}`);
});