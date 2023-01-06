import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import allRouter from './routes/routes.js';

dotenv.config();

export const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', allRouter); //! localhost:8803/api/hello/
