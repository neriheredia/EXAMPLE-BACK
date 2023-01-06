import { Router } from 'express';
import controllers from '../controller/hello_controller.js';

const router = Router();

router.get('/', controllers.helloController);

export default router;
