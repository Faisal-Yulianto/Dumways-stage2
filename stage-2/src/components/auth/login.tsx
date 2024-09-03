import { Box, Button, Text,Input } from "@chakra-ui/react";
import { useLoginForm } from "../../hooks/use-login-form";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const { handleChange, handleSubmit } = useLoginForm();
  const navigate = useNavigate();

  return (
  <center style={{
    backgroundColor: "black",minHeight: "100vh"
  }}>
    <Box>
      <Text as="h1" fontSize={50} color={"brand.green"} style={{
        paddingTop: "128px",
      }}>
        Circle
      </Text>
      <Text as="h1" fontSize={30} color={"#FFFFFF"}>
        Login to Circle
      </Text>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5",
          width: "412px",
          height: "336px"
        }}
      >
        <Input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <Input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <Text align={"end"} color={"white"}>
          Forgot password?
        </Text>
        <Button
          onClick={handleSubmit}
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
        <Text as="span" color="brand.green" onClick={() => navigate("/register")}>
          Create account
        </Text>
      </Text>
      </Box>
    </Box>
  </center>
  );
}
