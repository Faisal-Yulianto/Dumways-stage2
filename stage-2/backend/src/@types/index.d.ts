import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // Menambahkan properti user ke tipe Request
    }
  }
}
