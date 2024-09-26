import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Flex,
} from "@chakra-ui/react";
import { SidebarRightItem } from "../base/component/sidebar-right-item";
import { BaseLayoutItem } from "../base/component/base-layout-item";
import rectangle from "../../assets/Rectangle.png";
import { EditProfileModal } from "../features/edit-profile";

export function ProfilePageItem() {
  return (
    <Box
      max-height="1400px"
      width="100%"
      borderLeft="2px"
      borderRight="2px"
      borderColor={"gray"}
    >
      <SidebarRightItem
        cover={
          <div>
            <img
              src="cover.png"
              style={{
                width: "100%",
              }}
            />
          </div>
        }
        avatar={
          <div>
            <img
              src="avatar.png"
              style={{
                width: "80px",
                border: "5px solid black",
                borderRadius: "50%",
                top: "-10px",
                position: "relative",
              }}
            />
          </div>
        }
        title={"Faisal Yulainto"}
        alias={"@faisal"}
        picked={"Saya sedang belajar pemrograman"}
        follow={50}
        follower={100}
        customWidth="100%"
        customHeight="500px"
        customBackground="#1D1D1D"
      />
      <Tabs mt={4}>
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
            All Posts
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
            Media
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BaseLayoutItem
              text={"Saya sedang belajar pemrograman"}
              icon={"avatar.png"}
              user={"Faisal Yulianto"}
              email={"@faisal"}
              time={".4h"}
              like={"50"}
              replies={"100"}
            />
            <BaseLayoutItem
              text={"Saya sedang belajar pemrograman"}
              icon={"avatar.png"}
              user={"Faisal Yulianto"}
              email={"@faisal"}
              time={".4h"}
              like={"50"}
              replies={"100"}
            />
            <BaseLayoutItem
              text={
                <div>
                  <img src={rectangle} />
                </div>
              }
              icon={"avatar.png"}
              user={"Faisal Yulianto"}
              email={"@faisal"}
              time={".4h"}
              like={"50"}
              replies={"100"}
            />
          </TabPanel>
          <TabPanel>
            <Flex
              direction={{ base: "column", md: "row" }} 
              justify="center"
              align="center"
              wrap="wrap" 
              gap={1} 
            >
              <Image src="gal1.png" />
              <Image src="gal2.png" />
              <Image src="gal3.png" />
              <Image src="gal4.png" />
              <Image src="gal5.png" />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
