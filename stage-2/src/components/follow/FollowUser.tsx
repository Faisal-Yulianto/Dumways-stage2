import { Flex, Box, Text, Button } from "@chakra-ui/react";

export function FollowUser() {
  return (
    <>
      <Box>
        <Box padding="10px 5px" width="100%">
          <Flex>
            <Box width="40px">
              <img src="avatar.png" alt="Avatar" />
            </Box>
            <Box pl={5} fontSize="14px">
              <Text >Faisal Yulianto</Text>
              <Text color={'gray'}>@faisal</Text>
              <Text >saya sedang belajar pemrograman</Text>
            </Box>
            <Box ml="auto">
              <Button
                p={2}
                color={'gray'}
                backgroundColor={'transparent'}
                border="1px solid gray"
                width="70px"
                height='30px'
                fontSize="10px"
                borderRadius="50px"
              >
                Following
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export function Follower() {
    return (
      <>
        <Box>
          <Box padding="10px 5px" width="100%">
            <Flex>
              <Box width="40px">
                <img src="avatar (3).png" alt="Avatar" />
              </Box>
              <Box pl={5} fontSize="14px">
                <Text >Stella Audinha</Text>
                <Text color={'gray'}>@audinha</Text>
                <Text >picked over by the worms,and weird</Text>
              </Box>
              <Box ml="auto">
                <Button
                  p={2}
                  color={'white'}
                  backgroundColor={'transparent'}
                  border="1px solid white"
                  width="70px"
                  height='30px'
                  fontSize="10px"
                  borderRadius="50px"
                >
                  Follow
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </>
    );
  }
