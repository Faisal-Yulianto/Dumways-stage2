import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import Git from "../../../assets/icon/git.png";
import Ins from "../../../assets/icon/ins.png";
import Lin from "../../../assets/icon/lin.png";
import Fb from "../../../assets/icon/fb.png";
import Red from "../../../assets/icon/Red.png";

interface SugestItemProps {
  avatar: React.ReactNode;
  name: string;
  alias: string;
  button: string;
}

export function SugestItem({ avatar, name, alias, button }: SugestItemProps) {
  return (
    <Box padding="10px" width="100%">
      <Flex align="center">
        <Box>{avatar}</Box>
        <Box pl={3} pr="40px">
          <Text fontSize="18px">{name}</Text>
          <Text fontSize="14px">{alias}</Text>
        </Box>
        <Box ml="auto">
          <Button
            size="sm"
            color={'white'}
            variant="outline"
            borderColor="white"
            borderRadius="full"
            fontSize="10px"
            width="60px"
          >
            {button}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

interface FollowerItemProps {
  avatar: React.ReactNode;
  name: string;
  alias: string;
}

export function Follower({ avatar, name, alias }: FollowerItemProps) {
  return (
    <Box padding="10px" width="100%">
      <Flex align="center">
        <Box>{avatar}</Box>
        <Box pl={3} pr="20px">
          <Text fontSize="18px">{name}</Text>
          <Text fontSize="14px">{alias}</Text>
        </Box>
        <Box color="gray" ml={'auto'}>
          <Button
            size="sm"
            color={'gray'}
            variant="outline"
            borderColor="gray"
            borderRadius="full"
            fontSize="10px"
            width="80px"
          >
            Following
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export function DevItem() {
  return (
    <Box
      width="100%"
      backgroundColor="#262626"
      borderRadius="md"
      pl='50px'
      pt='20px'
      pb='20px'
    >
      <Flex align="center">
        <Text fontSize="18px">Developer By Faisal Yulianto • </Text>
        <Flex pl={1}>
          <Image src={Git} alt="Git" boxSize="25px" mr="15px" />
          <Image src={Lin} alt="LinkedIn" boxSize="25px" mr="15px" />
          <Image src={Fb} alt="Facebook" boxSize="25px" mr="15px" />
          <Image src={Ins} alt="Instagram" boxSize="25px" />
        </Flex>
      </Flex>
      <Flex pt={2} align="center">
        <Text fontSize="15px">Powered By</Text>
        <Image src={Red} alt="Red" boxSize="25px" height="18px" mx="5px" />
        <Text fontSize="15px">DumwaysIndonesia • #1CodingBootcamp</Text>
      </Flex>
    </Box>
  );
}
