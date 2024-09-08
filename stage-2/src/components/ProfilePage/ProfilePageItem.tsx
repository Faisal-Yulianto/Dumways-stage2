import { Box } from "@chakra-ui/react";
import { SidebarRightItem } from "../base/component/sidebar-right-item";
import { BaseLayoutItem } from "../base/component/base-layout-item";
import rectangle from '../../assets/Rectangle.png'

export function ProfilePageItem() {
  return (
    <Box
      height="1400px"
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
        Edit={"Edit Profile"}
        customWidth="100%"
        customHeight="500px"
        customBackground="#1D1D1D"
      />
    <BaseLayoutItem text={'Saya sedang belajar pemrograman'} icon={"avatar.png"} user={"Faisal Yulianto"} email={"@faisal"} time={".4h"} like={"50"} replies={"100"}/>
    <BaseLayoutItem text={'Saya sedang belajar pemrograman'} icon={"avatar.png"} user={"Faisal Yulianto"} email={"@faisal"} time={".4h"} like={"50"} replies={"100"}/>
    <BaseLayoutItem text={<div><img src={rectangle}/></div>} icon={"avatar.png"} user={"Faisal Yulianto"} email={"@faisal"} time={".4h"} like={"50"} replies={"100"}/>
    </Box>
  );
}
