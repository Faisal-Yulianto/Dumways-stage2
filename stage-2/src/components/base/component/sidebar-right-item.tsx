import { Card, Text, Box, Flex, Button } from "@chakra-ui/react";

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
  customHeight?: string;
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
  customWidth = "500px",
  customHeight = '361px',
  customBackground = "#262626",
}: RightItemProps) {
  return (
    <Card
      width={customWidth}
      height={customHeight}
      p={4}
      gap={4}
      backgroundColor={customBackground}
      borderRadius="md"
    >
        <Text color="#FFFFFF" fontSize="20px">
          My Profile
        </Text>
        <Box width='100%'>{cover}</Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Box
            width="100px"
            position="relative"
            left="30px"
            top="-45px"
          >
            {avatar}
          </Box>
          <Button
            color="white"
            borderRadius="full"
            variant="outline"
            width="80px"
            fontSize='12px'
            margin='10px'
          >
            {Edit}
          </Button>
        </Flex>
        <Box color="white">
          <Text pb='2' mt='-20px'>{title}</Text>
          <Text fontSize="12px" color="gray.400" mt="-5px">
            {alias}
          </Text>
          <Text fontSize="12px" p="10px 0">
            {picked}
          </Text>
          <Flex fontSize="12px">
            <Text pr="5px">{follow}</Text>
            <Text color="gray.400">Following</Text>
            <Text pl="20px">{follower}</Text>
            <Text pl="5px" color="gray.400">
              Followers
            </Text>
          </Flex>
        </Box>
    </Card>
  );
}
