import { Box, Image, Flex, Text } from "@chakra-ui/react";
import message from "../../../assets/icon/message-text.png";

interface BaseItemProps {
  text: React.ReactNode;
  icon: string;
  user: string;
  email: string;
  time: string;
  like: string;
  replies: string;
}

export function BaseLayoutItem({
  text,
  icon,
  user,
  email,
  time,
  like,
  replies,
}: BaseItemProps) {
  return (
    <Box width="100%" borderBottom="1px" borderColor="gray" p={2} mb={4}>
      <Flex p={5}>
        <Image borderRadius="full" boxSize="40px" src={icon} alt="User Icon" />
        <Box pl={3} flex="1">
          <Flex gap={1} fontSize="14px" color="gray">
            <Text fontWeight="bold">{user}</Text>
            <Text>{email}</Text>
            <Text>{time}</Text>
          </Flex>
          <Box mt={2}>
            <Text p={3} color="gray" fontSize="14px" wordBreak="break-word">
              {text}
            </Text>
            <Flex width="full" fontSize="14px" color="gray">
              <Flex align="center" mr={5}>
                <Image src="heart.png" boxSize="24px" alt="Like Icon" />
                <Text pl={2}>{like}</Text>
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
