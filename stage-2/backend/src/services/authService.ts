import prisma from '../utils/prismaClient';
import { hashPassword, comparePassword } from '../utils/bcrypt';
import { signToken } from '../utils/jwt';

interface RegisterData {
  username: string;
  email: string;
  password: string;
  name: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData) => {
  const { username, email, password } = data;
  
  const hashedPassword = await hashPassword(password);
  
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword
    },
  });
  
  return newUser;
};

export const loginUser = async (data: LoginData) => {
  const { email, password } = data;
  
  const user = await prisma.user.findUnique({
    where: { email },
  });
  
  if (!user || !(await comparePassword(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  
  const token = signToken(user.id);
  
  return { user, token };
};


