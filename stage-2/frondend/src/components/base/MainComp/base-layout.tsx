import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store/store";
import { PostItem } from "../component/add-post-item";
import { BaseLayoutItem } from "../component/base-layout-item";
import { fetchPosts, selectPosts } from "../../../redux/statusSlice";
import { formatDistanceToNow } from "date-fns";

export function BaseLayout() {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, error } = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const sortedPosts = posts?.slice().sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <Flex
      direction="column"
      pt={10}
      width="900px"
      borderRight="1px"
      borderLeft="1px"
      borderBottomColor={"gray"}
    >
      <PostItem />
      {error && <Box>Error: {error}</Box>}
      {sortedPosts?.map((post) => {
        const baseUrl = "http://localhost:3000";
        const avatar = post.user.avatar
          ? `${baseUrl}${post.user.avatar}`
          : "avatar.png";
        const images =
          post.image && post.image !== "no-file"
            ? `${baseUrl}/uploads/${post.image}`
            : undefined;
        const relativeTime = formatDistanceToNow(new Date(post.createdAt), {
          addSuffix: true,
        });

        return (
          <Box key={post.id} mb={4}>
            <BaseLayoutItem
              avatar={avatar}
              content={post.content}
              image={images}
              user={post.user.name}
              username={`@${post.user.username}`}
              createAt={`• ${relativeTime}`}
              postId={post.id}
              userId={post.user.id}
              replies={1}
            />
          </Box>
        );
      })}
    </Flex>
  );
}
