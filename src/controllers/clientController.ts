import { Request, Response } from 'express';
import IClient from '../interfaces/IClient';
import Client from '../models/Client'

async function getAllClients (req: Request, res: Response) {
  const client = await Client.find();

  if (client.length === 0) {
    return res.status(400).send({ error: 'No clients to show!' });
  }

  return res.send({ client });
}

async function createClient (req: Request, res: Response) {
  const { cpf } = req.body;

  try {
    if (await Client.findOne({ cpf })) {
      return res.status(400).send({ error: 'Client already exists!' });
    }

    await Client.create(req.body);

    return res.status(200).send({ message: 'Client created!' });
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' });
  }
}

async function updateClientById (req: Request, res: Response) {
  const update = {} as IClient;
  const { _id, name, cpf } = req.body;

  if (name && name != '') update.name = name;
  if (cpf && cpf != '') update.cpf = cpf;

  try {
    const client = await Client.updateOne({ _id }, update);
    if (client.nModified === 0) {
      return res.status(400).send({ error: 'Zero updates available' });
    } else {
      return res.status(200).send({ message: 'Client updated!' });
    }
  } catch (err) {
    return res.status(400).send({ error: 'This client does not exist!' });
  }
}

async function deleteClientById (req: Request, res: Response) {
  const { _id } = req.body;

  try {
    await Client.deleteOne({ _id });


    return res.status(200).send({ message: 'Client deleted!' });
  } catch (err) {
    return res.status(400).send({ error: 'This client does not exist!' });
  }
}

export default { getAllClients, createClient, updateClientById, deleteClientById };