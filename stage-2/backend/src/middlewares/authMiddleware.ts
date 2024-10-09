import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export interface AuthenticatedRequest extends Request {
  user?: { userId: number }; 
}

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  console.log('Authorization header:', authHeader); 

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = verifyToken(token);
    console.log('Decoded token:', decoded); 

    if (decoded && typeof decoded === 'object' && decoded.userId) {
      req.user = { userId: decoded.userId as number };
      next();
    } else {
      return res.status(401).json({ message: 'Invalid token structure' });
    }
  } catch (error) {
    console.error('Token verification error:', error); 
    return res.status(401).json({ message: 'Invalid token' });
  }
};