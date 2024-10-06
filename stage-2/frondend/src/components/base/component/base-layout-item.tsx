import { Box, Image, Flex, Text } from "@chakra-ui/react";
import message from "../../../assets/icon/message-text.png";
import LikeButton from '../../features/like';

interface BaseItemProps {
  content: string;
  image?: string;
  avatar: string;
  user: string;
  username: string;
  createAt: string;
  replies: number;
  postId: number; 
  userId: number;  
}

export function BaseLayoutItem({
  content,
  image,
  avatar,
  user,
  username,
  createAt,
  replies,
  postId, 
  userId,   
}: BaseItemProps) {
  return (
    <Box width="100%" borderBottom="1px" borderColor="gray" p={2} mb={4}>
      <Flex p={5}>
        <Image borderRadius="full" boxSize="40px" src={avatar} alt="User Icon" />
        <Box pl={3} flex="1">
          <Flex gap={1} fontSize="14px" color="gray">
            <Text fontWeight="bold">{user}</Text>
            <Text>{username}</Text>
            <Text>{createAt}</Text>
          </Flex>
          <Box mt={2}>
            <Text p={3} color="gray" fontSize="14px" wordBreak="break-word">
              <Text>{content}</Text>
              {image && image !== "no-file" && (
                <Image src={image} mt={2}  alt="Post Image" w='400px'/>
              )}
            </Text>
            <Flex width="full" fontSize="14px" color="gray">
              <Flex align="center" mr={5}>
                <LikeButton postId={postId} userId={userId} />
              </Flex>
              <Flex align="center">
                <Image src={message} boxSize="24px" alt="Replies Icon" />
                <Text pl={2}>{replies}</Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
