import { Box, Button, Text, Input } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

export function RegisterForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterFormData>();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    reset({
      username: '',
      email: '',
      password: ''
    });
  }, [reset]);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        username: data.username,
        email: data.email,
        password: data.password,
      });
  
      if (response.status === 201) {
        setErrorMessages([]); 
        navigate('/login'); 
      } else {
        const apiErrors = response.data.errors.map((err: { msg: string }) => err.msg);
        setErrorMessages(apiErrors); 
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errors = error.response.data.errors.map((err: { msg: string }) => err.msg);
        setErrorMessages(errors); 
      } else {
        setErrorMessages(['Kesalahan tidak diketahui, silakan coba lagi.']);
      }
    }
  };

  return (
    <center
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      <Box>
        <Text
          as="h1"
          fontSize={50}
          color={"brand.green"}
          style={{
            paddingTop: "128px",
          }}
        >
          Circle
        </Text>
        <Text as="h1" fontSize={30} color={"#FFFFFF"}>
          Register to Circle
        </Text>
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "412px",
            height: "336px",
          }}
        >
          <Input
            {...register("username", {
              required: "Username is required",
              minLength: { value: 3, message: "Username must be at least 3 characters" },
            })}
            name="username"
            autoComplete="off"
            placeholder="Username"
          />
          {errors.username && <Text color="red">{errors.username.message}</Text>}

          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            autoComplete="off"
            name="email"
            type="email"
            placeholder="Email"
          />
          {errors.email && <Text color="red">{errors.email.message}</Text>}

          <Input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
            autoComplete="off"
            name="password"
            type="password"
            placeholder="Password"
          />
          {errors.password && <Text color="red">{errors.password.message}</Text>}

          <Button
            type="submit"
            backgroundColor="brand.green"
            _hover={{ backgroundColor: "brand.green-disabled" }}
            padding="20px"
            color="white"
            borderRadius="5px"
          >
            Register
          </Button>

          {errorMessages.length > 0 && (
            <ul>
              {errorMessages.map((msg, index) => (
                <li key={index} style={{ color: 'red' }}>{msg}</li>
              ))}
            </ul>
          )}

          <Text color="white">
            Already have an account?
            <Text as="span" color="brand.green">
              <Link to="/login">
                <Text>Login</Text>
              </Link>
            </Text>
          </Text>
        </Box>
      </Box>
    </center>
  );
}

export default RegisterForm;

