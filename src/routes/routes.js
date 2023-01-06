import express from 'express';
import helloRoute from './hello.js';

const router = express.Router();

router.use('/hello', helloRoute);

export default router;
