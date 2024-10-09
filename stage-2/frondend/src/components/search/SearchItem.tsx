import { Box, Flex, Text, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export function SearchItem() {
  return (
    <Box
      width='720px'
      border="1px"
      borderColor="gray"
      p={5}
      backgroundColor={"#1D1D1D"}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" width="50px" p={3}>
          <img src="user-search.png" alt="Search Icon" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search your friend"
          style={{
            height: "48px",
            borderRadius: "60px",
            border: "2px solid green",
          }}
        />
      </InputGroup>
      <Flex justifyContent="center" alignItems="center" h="70vh">
        <Box w="300px" color="white" textAlign={"center"}>
          <Text fontSize="20px">Write and search something</Text>
          <Text fontSize="14px" color={"gray"}>
            Try searching for something else or check the spelling of what you typed.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
