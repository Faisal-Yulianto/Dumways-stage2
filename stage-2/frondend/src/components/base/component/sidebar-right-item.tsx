import { Card, Text, Box, Flex } from "@chakra-ui/react";
import { EditProfileModal } from "../../features/edit-profile";
import { SidebarRightItemProps } from "../../type/sidebarProps"; 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../../redux/store/userSlice"; 
import { RootState, AppDispatch } from "../../../redux/store/store";


export function SidebarRightItem({
  cover,
  size = "100px",
  left = "40px",
  top = "-70px",
  customWidth = "500px",
  customHeight = "361px",
  customBackground = "#262626",
}: SidebarRightItemProps) {
  const dispatch = useDispatch<AppDispatch>(); 
  const { user, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUserData(token)); 
    }
  }, [dispatch]);

  if (loading) {
    return <Text color="white">Loading...</Text>;
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  const avatarUrl = user?.avatar
    ? `http://localhost:3000${user.avatar}`
    : "/path/to/default/avatar.png";

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
      <Box width="100%">{cover}</Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box
          width={size}
          height={size}
          position="relative"
          left={left}
          top={top}
          borderRadius="full"
          border="5px solid black"
          overflow="hidden"
        >
          {user?.avatar && (
            <img
              src={avatarUrl}
              alt="Avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </Box>
        <EditProfileModal/>
      </Flex>
      <Box color="white">
        <Text pb="2" mt="-20px">
          {user?.name}
        </Text>
        <Text fontSize="12px" color="gray.400" mt="-5px">
          @{user?.username}
        </Text>
        <Text fontSize="12px" p="10px 0">
          {user?.bio}
        </Text>
        <Flex fontSize="12px">
          <Text pr="5px">0</Text>
          <Text color="gray.400">Following</Text>
          <Text pl="20px">0</Text>
          <Text pl="5px" color="gray.400">
            Followers
          </Text>
        </Flex>
      </Box>
    </Card>
  );
}
