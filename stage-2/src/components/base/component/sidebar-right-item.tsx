import { Card, CardBody, Text, Box, Flex } from "@chakra-ui/react";

interface RightItemProps {
  cover: React.ReactNode;
  avatar: React.ReactNode;
  title: string;
  alias: string;
  picked: string;
  follow: number;
  follower: number;
  Edit: string;
  customWidth?: string;
  customHeight?:string;
  customBackground?: string;
}
export function SidebarRightItem({
  
  cover,
  avatar,
  title,
  alias,
  picked,
  follow,
  follower,
  Edit,
  customWidth = "290px",
  customHeight = '300px',
  customBackground = "#262626",
}: RightItemProps) {
  return (
    <>
      <Card
        width={customWidth}
        height={customHeight}
        p="20px"
        gap="16px"
        backgroundColor="#1D1D1D"
      >
        <CardBody
          width="100%"
          p={4}
          borderRadius={10}
          backgroundColor={customBackground}
        >
          <Text color={"#FFFFFF"} fontSize="15px">
            My Profile
          </Text>
          <Box>{cover}</Box>
          <Box>
            <Flex justifyContent={"space-between"}>
              <Box
                style={{
                  width: "40px",
                  position: "relative",
                  left: "15px",
                  top: "-20px",
                }}
                
              >
                {avatar}
              </Box>
              <Box>
                <button
                  style={{
                    color: "white",
                    fontSize: "10px",
                    border: "1px solid ",
                    alignItems: "end",
                    borderRadius: "20px",
                    width: "60px",
                    height: "25px",
                    marginTop: "6px",
                  }}
                >
                  {Edit}
                </button>
              </Box>
            </Flex>
            <Box color={"white"} height="20px">
              <Text p="5px 0 ">{title}</Text>
              <Text fontSize="12px" color={"gray"} mt="-10px">
                {alias}
              </Text>
              <Text fontSize="12px" p="10px 0">
                {picked}
              </Text>
              <Box>
                <Flex fontSize="12px">
                  <Text pr="5px">{follow}</Text>
                  <Text color={"gray"}>Following</Text>
                  <Text pl="20px">{follower}</Text>
                  <Text pl="5px" color={"gray"}>
                    Followers
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}
