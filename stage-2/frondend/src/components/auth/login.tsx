import { Box, Button, Text, Input } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const navigate = useNavigate(); 

  const onSubmit = (data: LoginFormData) => {
    console.log("Login sukses:", data);
    navigate('/'); 
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
              required: "Email harus diisi",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Format email tidak valid",
              },
            })}
            name="email"
            type="email"
            placeholder="Email"
          />
          {errors.email && <Text color="red">{errors.email.message}</Text>}

          <Input
            {...register("password", {
              required: "Password harus diisi",
              minLength: {
                value: 6,
                message: "Password minimal 6 karakter",
              },
            })}
            name="password"
            type="password"
            placeholder="Password"
          />
          {errors.password && <Text color="red">{errors.password.message}</Text>} 

          <Text align={"end"} color={"white"}>
            Forgot password?
          </Text>
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


