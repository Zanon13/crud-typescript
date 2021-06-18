import { Router } from 'express';
import connectToMongo from '../connection';
import clientController from '../controllers/clientController';

const router = Router();
connectToMongo();

router.get('/clients', clientController.getAllClients);
router.post('/addClient', clientController.createClient);
router.put('/clients/:client_id', clientController.updateClientById);
router.delete('/clients/:client_id', clientController.deleteClientById);

export default router;