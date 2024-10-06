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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts, selectPosts } from "../../redux/statusSlice";
import { fetchUserData, selectUser } from "../../redux/userSlice"; 
import { AppDispatch } from "../../redux/store/store";
import Cookies from 'js-cookie';
import { formatDistanceToNow } from "date-fns";

export function ProfilePageItem() {
  const dispatch = useDispatch<AppDispatch>();

  const userLogin = useSelector(selectUser); 
  const userLoginId = userLogin?.id;

  const { posts, loading, error } = useSelector(selectPosts);

  useEffect(() => {
    const token = Cookies.get('token'); 
    console.log("Token:", token); 
    if (token) {
      dispatch(fetchUserData(token)); 
    } else {
      console.log("Token not found.");
    }
  }, [dispatch]);

  useEffect(() => {
    if (userLoginId) {
      console.log("Fetching posts for user ID:", userLoginId);
      dispatch(fetchPosts()); 
    } else {
      console.log("User Login ID is not available yet.");
    }
  }, [dispatch, userLoginId]);

  const userPosts = posts.filter((post) => {
    const postUserId = post.user.id?.toString();
    const loginUserId = userLoginId?.toString();
    
    console.log("Post User ID:", postUserId, "User Login ID:", loginUserId); // Log untuk debug

    return postUserId === loginUserId;
  });

  console.log("User Posts before filter:", posts);
  console.log("Filtered User Posts:", userPosts);

  const baseUrl = "http://localhost:3000"; 

  return (
    <Box
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
              alt="Cover"
            />
          </div>
        }
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
            {loading && <Box>Loading posts...</Box>}
            {error && <Box>Error: {error}</Box>}
            {userPosts.length === 0 && <Box>No posts yet.</Box>}
            {userPosts.map((post) => {
              const avatar = post.user.avatar
                ? `${baseUrl}${post.user.avatar}`
                : "avatar.png";
              const images =
                post.image && post.image !== "no-file"
                  ? `${baseUrl}/uploads/${post.image}`
                  : undefined;

              return (
                <BaseLayoutItem
                  key={post.id}
                  content={post.content}
                  avatar={avatar} 
                  user={post.user.name}
                  username={`@${post.user.username}`}
                  createAt={`• ${formatDistanceToNow(new Date(post.createdAt), {
                    addSuffix: true,
                  })}`} 
                  replies={post.replyCount}
                  postId={post.id}
                  userId={post.user.id}
                  image={images} 
                />
              );
            })}
          </TabPanel>
          <TabPanel>
            <Flex
              direction={{ base: "column", md: "row" }} 
              justify="start"
              align="center"
              wrap="wrap" 
              gap={2} 
            >
              {userPosts.map((post) => {
                const images =
                  post.image && post.image !== "no-file"
                    ? `${baseUrl}/uploads/${post.image}`
                    : null;

                return (
                  images && (
                    <Image
                      key={post.id}
                      src={images}
                      alt={`Media from ${post.user.name}`}
                      boxSize="400px" 
                      objectFit="cover" 
                      borderRadius="md" 
                    />
                  )
                );
              })}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

