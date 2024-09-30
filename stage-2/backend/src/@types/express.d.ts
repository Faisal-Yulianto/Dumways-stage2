// src/types/express.d.ts
import { JwtPayload } from 'jsonwebtoken';

declare module 'express' {
  export interface Request {
    user?: JwtPayload | string; // Sesuaikan tipe dengan apa yang dikembalikan oleh `verifyToken`
  }
}
