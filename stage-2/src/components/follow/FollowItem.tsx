import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { FollowUser, Follower } from "./FollowUser";

export function FollowItem() {
  return (
    <Box backgroundColor={"#1D1D1D"} width='900px' p={5} color="white" border='1px' borderColor={'gray'}>
      <Text fontSize="28px" mb={4}>
        Follows
      </Text>
      <Tabs>
        <TabList borderBottom="2px solid gray">
          <Tab
            width="100%"
            _selected={{
              color: "green.400",
              borderBottomWidth: "4px",
              borderBottomColor: "green.400",
            }}
            borderBottom="4px solid transparent"
          >
            Followers
          </Tab>
          <Tab
            width="100%"
            _selected={{
              color: "green.400",
              borderBottomWidth: "4px",
              borderBottomColor: "green.400",
            }}
            borderBottom="4px solid transparent"
          >
            Following
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Follower />
            <Follower />
            <Follower />
            <Follower />
            <Follower />
            <Follower />
            <Follower />
            <Follower />
            <Follower />
            <Follower />
          </TabPanel>
          <TabPanel>
            <FollowUser />
            <FollowUser />
            <FollowUser />
            <FollowUser />
            <FollowUser />
            <FollowUser />
            <FollowUser />
            <FollowUser />
            <FollowUser />
            <FollowUser />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
