import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const MONGO_HOST = process.env.MONGO_URL || 'localhost:27017/node-crud-api'

const MONGO = {
  host: MONGO_HOST,
  options: MONGO_OPTIONS,
  url: `mongodb://${MONGO_HOST}`,
};

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

const SERVER = {
  hostname: HOSTNAME,
  port: PORT, 
};

const config = {
  mongo: MONGO,
  server: SERVER,
};

export default config;