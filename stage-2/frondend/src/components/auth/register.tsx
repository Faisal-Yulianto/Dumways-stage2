import { Box, Button, Text, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function RegisterForm() {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormData>();
  
  const navigate = useNavigate(); 

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate('/login'); 
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
          Daftar ke Circle
        </Text>
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5",
            width: "412px",
            height: "400px", 
          }}
        >
          <Input
            {...register("name", { required: "Nama lengkap harus diisi" })}
            name="name"
            type="text"
            placeholder="Nama Lengkap"
          />
          {errors.name && <Text color="red">{errors.name.message}</Text>}

          <Input
            {...register("email", {
              required: "Email harus diisi",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Masukkan email yang valid",
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
              minLength: { value: 6, message: "Password minimal 6 karakter" },
            })}
            name="password"
            type="password"
            placeholder="Password"
          />
          {errors.password && <Text color="red">{errors.password.message}</Text>}

          <Input
            {...register("confirmPassword", {
              required: "Konfirmasi password harus diisi",
              validate: value => value === getValues('password') || "Password tidak cocok",
            })}
            name="confirmPassword"
            type="password"
            placeholder="Konfirmasi Password"
          />
          {errors.confirmPassword && <Text color="red">{errors.confirmPassword.message}</Text>}

          <Button
            type="submit"
            backgroundColor="brand.green"
            _hover={{ backgroundColor: "brand.green-disabled" }}
            padding="20px"
            color="white"
            borderRadius="5px"
          >
            Daftar
          </Button>

          <Text>
            Sudah punya akun?
            <Link to="/login">
                <Text color={'brand.green-disabled'}>login disini</Text>
              </Link>
          </Text>
        </Box>
      </Box>
    </center>
  );
}

