import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store/store";
import { PostItem } from "../component/add-post-item";
import { BaseLayoutItem } from "../component/base-layout-item";
import { fetchPosts, selectPosts } from "../../../redux/statusSlice";
import { formatDistanceToNow } from "date-fns";
import { DetailPost } from "../component/detailPost";

interface Post {
  id: number;
  content: string;
  createdAt: string | number | Date;
  image?: string;
  user: {
    id: number;
    name: string;
    username: string;
    avatar: string;
  };
}

export function BaseLayout() {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, error } = useSelector(selectPosts);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null); // Mengelola state post yang dipilih

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const sortedPosts = posts?.slice().sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const handleShowDetail = (post: Post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  return (
    <Flex
      direction="column"
      pt={10}
      width="720px"
      borderRight="1px"
      borderLeft="1px"
      borderBottomColor={"gray"}
    >
      {!selectedPost && (
        <>
          <PostItem />
          {error && <Box>Error: {error}</Box>}
          {sortedPosts?.map((post: Post) => {
            const baseUrl = "http://localhost:3000";
            const avatar = post.user.avatar
              ? `${baseUrl}${post.user.avatar}`
              : "avatar.png";
            const images =
              post.image && post.image !== "no-file"
                ? `${baseUrl}uploads/${post.image}`
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
                  onShowDetail={() => handleShowDetail(post)}
                />
              </Box>
            );
          })}
        </>
      )}

      {selectedPost && ( // Tampilkan DetailPost hanya jika ada post yang dipilih
        <DetailPost
          content={selectedPost.content}
          image={
            selectedPost.image && selectedPost.image !== "no-file"
              ? `http://localhost:3000/uploads/${selectedPost.image}`
              : undefined
          }
          avatar={
            selectedPost.user.avatar
              ? `http://localhost:3000${selectedPost.user.avatar}`
              : "avatar.png"
          }
          user={selectedPost.user.name}
          username={`@${selectedPost.user.username}`}
          createAt={`• ${formatDistanceToNow(new Date(selectedPost.createdAt), {
            addSuffix: true,
          })}`}
          postId={selectedPost.id}
          userId={selectedPost.user.id}
          onBack={handleBackToList}
        />
      )}
    </Flex>
  );
}
