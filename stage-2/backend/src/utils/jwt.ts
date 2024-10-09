import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const signToken = (userId: number): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' }); 
};


export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    if (typeof decoded === 'object' && decoded.userId) {
      return decoded;
    }
    return null;
  } catch (error) {
    console.error('Error verifying token:', error); 
    return null; 
  }
};