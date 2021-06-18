import { Router } from 'express';
import clientController from '../controllers/clientController';

const router = Router();

router.get('/clients', clientController.getAllClients);

export default router;