import { Box, Button, Text, Input } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom"; // Impor useNavigate
import Cookies from 'js-cookie';
import { useForm } from "react-hook-form";
import axios from "axios";
import axiosInstance from "./axiosInstance";

interface LoginFormData {
  email: string;
  password: string;
}

const baseUrl = import.meta.env.VITE_API_URL;
export function LoginForm() {
  const navigate = useNavigate(); // Inisialisasi useNavigate
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axiosInstance.post(`${baseUrl}/api/auth/login`, data, {
        withCredentials: true
      });

      const { token } = response.data;

      // Menyimpan token dengan waktu kedaluwarsa 1 jam
      Cookies.set('token', token, {
        expires: 1 / 24, // 1 jam
        secure: true,
        sameSite: 'Strict',
        path: '/',
      });

      // Arahkan pengguna ke halaman utama setelah berhasil login
      navigate('/'); 
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const serverErrors = error.response.data.errors;
        serverErrors.forEach((err: { msg: string }) => {
          setError("password", { type: "manual", message: err.msg });
        });
      } else {
        setError("password", { type: "manual", message: "Login failed. Please try again." });
      }
    }
  };

  return (
    <center style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <Box>
        <Text
          as="h1"
          fontSize={50}
          color={"brand.green"}
          style={{ paddingTop: "128px" }}
        >
          Circle
        </Text>
        <Text as="h1" fontSize={30} color={"#FFFFFF"}>
          Login to Circle
        </Text>
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5",
            width: "412px",
            height: "336px",
          }}
        >
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            autoComplete="off"
            type="email"
            placeholder="Email"
          />
          {errors.email && <Text color="red">{errors.email.message}</Text>}

          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            autoComplete="off"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <Text color="red">{errors.password.message}</Text>
          )}

          <Button
            type="submit"
            backgroundColor="brand.green"
            _hover={{ backgroundColor: "brand.green-disabled" }}
            padding="20px"
            color="white"
            borderRadius="5px"
          >
            Login
          </Button>
          <Text>
            Don't have an account yet?
            <Text as="span" color="brand.green">
              <Link to="/register">
                <Text>Create account</Text>
              </Link>
            </Text>
          </Text>
        </Box>
      </Box>
    </center>
  );
}
