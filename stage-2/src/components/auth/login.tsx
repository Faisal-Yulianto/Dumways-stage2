import { Box, Button, Text,Input } from "@chakra-ui/react";

export function LoginForm() {
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
          type="email"
          placeholder="Email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
        />
        <Text align={"end"} color={"white"}>
          Forgot password?
        </Text>
        <Button
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
        <Text as="span" color="brand.green" >
          Create account
        </Text>
      </Text>
      </Box>
    </Box>
  </center>
  );
}
