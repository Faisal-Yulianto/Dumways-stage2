import Git from "../../../assets/icon/git.png";
import Ins from "../../../assets/icon/ins.png";
import Lin from "../../../assets/icon/lin.png";
import Fb from "../../../assets/icon/fb.png";
import Red from "../../../assets/icon/Red.png";
import { Flex, Box, Text } from "@chakra-ui/react";

interface SugestItemProps {
  avatar: React.ReactNode;
  name: string;
  alias: string;
  button: string;
}
export function SugestItem({ avatar, name, alias, button }: SugestItemProps) {
  return (
    <>
      <Box padding="5px">
        <Flex>
          <Box width="0px">{avatar}</Box>
          <Box pl={2} pr={8}>
            <Text fontSize="10px">{name}</Text>
            <Text fontSize="10px">{alias}</Text>
          </Box>
          <Box>
            <button
              style={{
                border: "1px white solid",
                width: "40px",
                fontSize: "10px",
                borderRadius: "50px",
              }}
            >
              {button}
            </button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
interface FollowerItemProps {
  avatar: React.ReactNode;
  name: string;
  alias: string;
}
export function Follower({ avatar, name, alias }: FollowerItemProps) {
  return (
    <>
      <Box padding="5px 0">
        <Flex>
          <Box width="30px">{avatar}</Box>
          <Box pl={2} pr={5}>
            <Text fontSize="10px">{name}</Text>
            <Text fontSize="10px">{alias}</Text>
          </Box>
          <Box color={"gray"}>
            <button
              style={{
                border: "1px white solid",
                width: "60px",
                fontSize: "10px",
                borderRadius: "50px",
              }}
            >
              Following
            </button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export function DevItem() {
  return (
    <>
      <Box
        width="280px"
        height="max-content"
        p="15px 30px"
        gap="16px"
        backgroundColor={"#262626"}
        margin="5px"
        borderRadius="10"
      >
        <Flex>
          <Text fontSize="10px">Developer By Faisal Yulianto • </Text>
          <Flex pl={1}>
            <img
              src={Git}
              style={{ width: "15px", height: "15px", marginRight: "5px" }}
            />
            <img
              src={Lin}
              style={{ width: "15px", height: "15px", marginRight: "5px" }}
            />
            <img
              src={Fb}
              style={{ width: "15px", height: "15px", marginRight: "5px" }}
            />
            <img
              src={Ins}
              style={{ width: "15px", height: "15px", marginRight: "5px" }}
            />
          </Flex>
        </Flex>
        <Flex pt={2}>
          <Text fontSize="8px">Powerded By</Text>
          <img
            src={Red}
            style={{ width: "15px", height: "10px", margin: "0 5px" }}
          />
          <Text fontSize="8px">DumwaysIndonesia • #1CodingBootcamp</Text>
        </Flex>
      </Box>
    </>
  );
}
