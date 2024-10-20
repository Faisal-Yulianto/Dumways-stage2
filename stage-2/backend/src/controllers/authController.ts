import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken'; 
import prisma from '../utils/prismaClient'; 

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    });

    if (existingUser) {
      return res.status(400).json({ errors: [{ msg: "Username atau email sudah ada" }] });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { username, email, password: hashedPassword }
    });

    return res.status(201).json({ user: newUser });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Kesalahan internal server" }] });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ errors: [{ msg: "Email atau password salah" }] });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ errors: [{ msg: "Email atau password salah" }] });
    }
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      return res.status(500).json({ errors: [{ msg: "Server misconfiguration: JWT_SECRET missing" }] });
    }

    const token = jwt.sign(
      { userId: user.id },
      JWT_SECRET,
      { expiresIn: "1h", audience: "your-app", issuer: "your-domain" }
    );

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ errors: [{ msg: "Kesalahan internal server" }] });
  }
};
