import { Box, Image, Flex, Text } from "@chakra-ui/react";
import LikeButton from "../../features/like";
import { Reply } from "../../features/reply";
 

interface DetailPostProps {
  content: string;
  image?: string;
  avatar: string;
  user: string;
  username: string;
  createAt: string;
  postId: number;
  userId: number;
  onBack: () => void;
}

export function DetailPost({
  content,
  image,
  avatar,
  user,
  username,
  createAt,
  postId,
  userId,
  onBack,
}: DetailPostProps) {
  return (
    <Box width="100%" p={4}>
      <Flex>
      <Image src="arrow.png" onClick={onBack}></Image>
      <Text p={2}>Status</Text>
      </Flex>
      <Flex p={5}>
        <Image
          borderRadius="full"
          boxSize="40px"
          src={avatar}
          alt="User Icon"
          objectFit={"cover"}
        />
        <Box pl={3} flex="1">
            <Text fontWeight="bold" fontSize='15px'>{user}</Text>
            <Text fontSize='10px' color={'gray'}>{username}</Text>
          <Box mt={2}>
            <Text p={3} fontSize="14px" wordBreak="break-word">
              {content}
              {image && image !== "no-file" && (
                <Image src={image} mt={2} alt="Post Image" w="400px" />
              )}
              <Text mt={5} color={'gray'}>{createAt}</Text>
            </Text>
            <Flex width="full" fontSize="14px" color="gray">
              <Flex align="center" m={5}>
                <LikeButton postId={postId} userId={userId} />
              </Flex>
            </Flex>
            <Reply/>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
