import mongoose, { Schema } from 'mongoose';
import IClient from "../interfaces/IClient";

const ClientSchema: Schema = new Schema({
  name: { type: String, required: true, },
  cpf: { type: String, required: true, },
});

export default mongoose.model<IClient>('Client', ClientSchema);
