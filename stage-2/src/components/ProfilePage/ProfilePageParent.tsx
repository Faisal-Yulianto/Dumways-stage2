import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "../base/MainComp/sidebar-left";
import { SidebarRightItem, } from "../base/component/sidebar-right-item";
import { BaseLayoutItem } from "../base/component/base-layout-item";



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
        <Flex direction={'column'}>
        <SidebarRightItem
                  cover={<div>
                      <img src="cover.png" style={{ width: '100%' }} />
                  </div>}
                  avatar={
                  <Box
                    width="100px" 
                    position="relative"
                    left="10px"
                    top="-15px"
                    >
                    <img src="avatar.png" style={{width:'60px',border:'4px solid',borderRadius:'50%'}}/>
                  </Box>
                }
                  title={"Faisal Yulianto"}
                  alias={"@faisal"}
                  picked={"saya sedang belajar pemrigraman"}
                  follow={100}
                  follower={50}
                  Edit={"Edit Profile"}
                  customBackground="#1D1D1D"
                  customWidth="700px"
                  customHeight="380px"
                  />
                  <Box height='200px' backgroundColor={'#1D1D1D'}>
                  <BaseLayoutItem text={''} icon={"avatar.png"} user={"faisal yulianto"} email={"@faisal"} time={". 4h"} like={"21"} replies={"422"}/>
                  </Box>
            </Flex>
        </Flex>
        
    </>
  );
}
