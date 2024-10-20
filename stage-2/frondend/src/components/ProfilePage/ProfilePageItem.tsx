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
import { useEffect, useState } from "react";
import { fetchPosts, selectPosts } from "../../redux/statusSlice";
import { fetchUserData, selectUser } from "../../redux/userSlice";
import { AppDispatch } from "../../redux/store/store";
import Cookies from "js-cookie";
import { formatDistanceToNow } from "date-fns";
import { DetailPost } from "../base/component/detailPost";

export function ProfilePageItem() {
  const dispatch = useDispatch<AppDispatch>();

  const userLogin = useSelector(selectUser);
  const userLoginId = userLogin?.id; // Validasi user ID

  const { posts = [], loading, error } = useSelector(selectPosts);

  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(fetchUserData(token));
      console.log("Token found, fetching user data...");
    } else {
      console.error("Token not found.");
    }
  }, [dispatch]);

  useEffect(() => {
    if (userLoginId) {
      dispatch(fetchPosts());
      console.log("User is logged in, fetching posts...");
    }
  }, [dispatch, userLoginId]); // Mengambil posts setiap kali userLoginId berubah

  const userPosts = Array.isArray(posts)
    ? posts
        .filter((post) => post.user.id === userLoginId) // Filter posts milik user yang login
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Urutkan berdasarkan createdAt
    : [];

  // Logging untuk memastikan user posts ditampilkan dengan benar
  console.log("User posts:", userPosts);
  console.log("All posts:", posts);

  // Handler for creating new post

  if (selectedPost !== null) {
    const postDetail = posts.find((post) => post.id === selectedPost);
    if (postDetail) {
      const avatar = postDetail.user.avatar ? `${postDetail.user.avatar}` : "avatar.png";
      const images =
        postDetail.image && postDetail.image !== "no-file"
          ? `${postDetail.image}`
          : undefined;

      return (
        <DetailPost
          content={postDetail.content}
          avatar={avatar}
          user={postDetail.user.name}
          username={`@${postDetail.user.username}`}
          createAt={`• ${formatDistanceToNow(new Date(postDetail.createdAt), {
            addSuffix: true,
          })}`}
          postId={postDetail.id}
          userId={postDetail.user.id}
          image={images}
          onBack={() => setSelectedPost(null)}
        />
      );
    }
  }

  return (
    <Box borderLeft="2px" borderRight="2px" borderColor={"gray"}>
      <SidebarRightItem customWidth="100%" customHeight="500px" customBackground="#1D1D1D" />
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
              const avatar = post.user.avatar ? `${post.user.avatar}` : "avatar.png";
              const images =
                post.image && post.image !== "no-file"
                  ? `${post.image}`
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
                  onShowDetail={() => setSelectedPost(post.id)}
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
                    ? `${post.image}`
                    : null;

                return (
                  images && (
                    <Image
                      key={post.id}
                      src={images}
                      alt={`Media from ${post.user.name}`}
                      boxSize="360px"
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
