import express from 'express';
import config from './config/config';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(config.server.port, () => {
  console.log(`Server running on ${config.server.hostname}:${config.server.port}`);
});