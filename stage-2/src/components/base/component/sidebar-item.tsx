import { Flex, Text, Box, Link } from '@chakra-ui/react';

interface NavbarItemProps {
  icon: string;
  text: string;
}

export function NavbarItem({ icon, text }: NavbarItemProps) {
  return (
    <Link href="#" _hover={{ textDecoration: 'none' }}>
      <Flex
        alignItems="center"
        w="337px"
        h="64px"
        p={4}
        ml={10}
        gap={4}
        borderRadius="md"
      >
        <Box>
          <img src={icon} alt={`${text} Icon`} style={{ width: '32px', height: '32px' }} />
        </Box>
        <Text fontSize="18px" fontWeight="500" lineHeight="24px">
          {text}
        </Text>
      </Flex>
    </Link>
  );
}

