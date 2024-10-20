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
  const [selectedPost, setSelectedPost] = useState<Post | null>(null); 

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const sortedPosts = Array.isArray(posts)
    ? posts.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    : [];

  const handleShowDetail = (post: Post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  

  return (
    <Flex direction="column" pt={10}  borderRight="1px" borderLeft="1px" borderBottomColor="gray">
      {!selectedPost && (
        <>
          <PostItem />
          {error && <Box color="red.500">Error: {error}</Box>} 
          {sortedPosts.map((post: Post) => {
            const avatar = post.user.avatar ? `${post.user.avatar}` : "avatar.png";
            const images = post.image && post.image !== "no-file" ? `${post.image}` : undefined;
            const relativeTime = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });

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

      {selectedPost && (
        <DetailPost
          content={selectedPost.content}
          image={selectedPost.image && selectedPost.image !== "no-file" ? `${selectedPost.image}` : undefined}
          avatar={selectedPost.user.avatar ? `${selectedPost.user.avatar}` : "avatar.png"}
          user={selectedPost.user.name}
          username={`@${selectedPost.user.username}`}
          createAt={`• ${formatDistanceToNow(new Date(selectedPost.createdAt), { addSuffix: true })}`}
          postId={selectedPost.id}
          userId={selectedPost.user.id}
          onBack={handleBackToList}
        />
      )}
    </Flex>
  );
}
