import express from 'express';
import cors from 'cors';
import fs from 'fs';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import { getUser } from './controllers/userController';
import profileRoutes from './routes/profileRoutes';
import postRoutes from './routes/postRoutes'
import path, { dirname } from 'path';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api',postRoutes)
app.use('/api/auth', authRoutes);
app.use('/api',profileRoutes);
app.get('/api/user', getUser);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
