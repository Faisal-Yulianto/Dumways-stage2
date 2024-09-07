import { Box, Flex,Text } from "@chakra-ui/react";
import { Navbar } from "../base/MainComp/sidebar-left";
import { SidebarRightItem } from "../base/component/sidebar-right-item";
import { BaseLayoutItem } from "../base/component/base-layout-item";
import rectangle from "../../assets/Rectangle.png";
import { Follower, SugestItem,DevItem } from "../base/component/SugestItem";

export function ProfilePageParent() {
  return (
    <>
      <Flex>
        <Navbar
          home={"home.png"}
          follow={"heart.png"}
          search={"user-search.png"}
          profile={"profileactive.png"}
        />
        <Flex direction={"column"}>
          <SidebarRightItem
            cover={
              <div>
                <img src="cover.png" style={{ width: "100%" }} />
              </div>
            }
            avatar={
              <Box width="100px" position="relative" left="10px" top="-15px">
                <img
                  src="avatar.png"
                  style={{
                    width: "60px",
                    border: "4px solid",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            }
            title={"Faisal Yulianto"}
            alias={"@faisal"}
            picked={"saya sedang belajar pemrograman"}
            follow={100}
            follower={50}
            Edit={"Edit Profile"}
            customBackground="#1D1D1D"
            customWidth="700px"
            customHeight="380px"
          />
          <Box height="653px" backgroundColor={"#1D1D1D"}>
            <BaseLayoutItem
              text={"saya sedang belajar pemrograman"}
              icon={"avatar.png"}
              user={"faisal yulianto"}
              email={"@faisal"}
              time={". 4h"}
              like={"21"}
              replies={"422"}
            />
            <BaseLayoutItem
              text={
                <div>
                  saya sedang belajar pemrograman
                  <img src={rectangle} style={{ height: "380px" }} />
                </div>
              }
              icon={"avatar.png"}
              user={"faisal yulianto"}
              email={"@faisal"}
              time={". 4h"}
              like={"21"}
              replies={"422"}
            />
          </Box>
        </Flex>
        <Box backgroundColor={"#1D1D1D"} width="100%">
          <Box
            width="249px"
            height={"-moz-max-content"}
            backgroundColor={"#262626"}
            m={5}
            pl={5}
            borderRadius={5}
          >
            <Text pt={5}pb={3}>Sugested for You</Text>
            <Follower
              avatar={
                <div>
                  <img src="avatar.png"/>
                </div>
              }
              name={"faisal yulianto"}
              alias={"@faisal"}
            />
            <SugestItem
              avatar={
                <div>
                  <img src="avatar.png"/>
                </div>
              }
              name={"faisal yulianto"}
              alias={"@faisal"}
              button={"Follow"}
            />
            <SugestItem
              avatar={
                <div>
                  <img src="avatar.png"/>
                </div>
              }
              name={"faisal yulianto"}
              alias={"@faisal"}
              button={"Follow"}
            />
            <SugestItem
              avatar={
                <div>
                  <img src="avatar.png"/>
                </div>
              }
              name={"faisal yulianto"}
              alias={"@faisal"}
              button={"Follow"}
            />
          </Box>
          <DevItem/>
        </Box>
      </Flex>
    </>
  );
}
