import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { getUser } from './src/controllers/userController';
import profileRoutes from './src/routes/profileRoutes';
import postRoutes from './src/routes/postRoutes'
import statusRoutes from './src/routes/statusRoutes'
import likesRouter from './src/routes/likeRoutes';
import ReplyRoutes from './src/routes/ReplyRouter';
import followRoutes from './src/routes/followRoutes'
import path, { dirname } from 'path';
import swaggerUI from "swagger-ui-express"
import swaggerDocument from "./swagger/swagger-output.json"

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT ;
const corsOptions = {
  origin:  'https://dumways-stage2-cp18.vercel.app/', 
  credentials: true, 
};
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://dumways-stage2-cp18.vercel.app/');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
