import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { SidebarRightItem } from "../component/sidebar-right-item";
import { SugestItem, Follower, DevItem } from "../component/SugestItem";

export function SidebarRight() {
  return (
    <Flex direction="column" backgroundColor="#1D1D1D" p="5">
      <SidebarRightItem size={"60px"} top={"-50px"} />
      <Box p="8" mt="5" mb="5" backgroundColor="#262626" borderRadius="10">
        <Text padding="10px" color="white" fontSize="20px">
          Suggested for you
        </Text>
        <Follower
          avatar={
            <Image
              src="avatar.png"
              alt="Follower Avatar"
              width="50px"
              height="50px"
            />
          }
          name="Mohammed Jawahir"
          alias="@jawahir"
        />
        <SugestItem
          avatar={
            <Image
              src="avatar.png"
              alt="Suggested Avatar 1"
              width="50px"
              height="50px"
            />
          }
          name="Mohammed Jawahir"
          alias="@jawahir"
          button="follow"
        />
        <SugestItem
          avatar={
            <Image
              src="avatar.png"
              alt="Suggested Avatar 2"
              width="50px"
              height="50px"
            />
          }
          name="Sarah K."
          alias="@sarah"
          button="follow"
        />
        <SugestItem
          avatar={
            <Image
              src="avatar.png"
              alt="Suggested Avatar 3"
              width="50px"
              height="50px"
            />
          }
          name="John Doe"
          alias="@johndoe"
          button="follow"
        />
        <SugestItem
          avatar={
            <Image
              src="avatar.png"
              alt="Suggested Avatar 4"
              width="50px"
              height="50px"
            />
          }
          name="Emily R."
          alias="@emily"
          button="follow"
        />
        <SugestItem
          avatar={
            <Image
              src="avatar.png"
              alt="Suggested Avatar 5"
              width="50px"
              height="50px"
            />
          }
          name="Alex Smith"
          alias="@alex"
          button="follow"
        />
        <SugestItem
          avatar={
            <Image
              src="avatar.png"
              alt="Suggested Avatar 6"
              width="50px"
              height="50px"
            />
          }
          name="Anna Lee"
          alias="@anna"
          button="follow"
        />
        <SugestItem
          avatar={
            <Image
              src="avatar.png"
              alt="Suggested Avatar 7"
              width="50px"
              height="50px"
            />
          }
          name="Mike Johnson"
          alias="@mike"
          button="follow"
        />
        <SugestItem
          avatar={
            <Image
              src="avatar.png"
              alt="Suggested Avatar 8"
              width="50px"
              height="50px"
            />
          }
          name="Olivia Brown"
          alias="@olivia"
          button="follow"
        />
      </Box>

      <Box mt="5">
        <DevItem />
      </Box>
    </Flex>
  );
}
