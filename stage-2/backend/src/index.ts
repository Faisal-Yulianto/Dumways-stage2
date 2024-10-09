import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { getUser } from './controllers/userController';
import profileRoutes from './routes/profileRoutes';
import postRoutes from './routes/postRoutes'
import statusRoutes from './routes/statusRoutes'
import likesRouter from './routes/likeRoutes';
import ReplyRoutes from './routes/ReplyRouter';
import path, { dirname } from 'path';
import swaggerUI from "swagger-ui-express"
import swaggerDocument from "../swagger/swagger-output.json"

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT ;
const corsOptions = {
  origin: 'http://localhost:5173', 
  credentials: true, 
};
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(cors(corsOptions))
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/status',statusRoutes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api',postRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/reply',ReplyRoutes);
app.use('/api',profileRoutes);
app.get('/api/user', getUser);
app.use('/api/likes', likesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
