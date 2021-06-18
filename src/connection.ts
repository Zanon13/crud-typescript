import mongoose from 'mongoose';
import config from './config/config';

export default function connectToMongo(): void {
  mongoose.connect(config.mongo.url, config.mongo.options)
  .then( result => {
    console.log('Connected to MongoDB!');
  })
  .catch( err => {
    console.log('Failed to connect to MongoDB');
  })
}