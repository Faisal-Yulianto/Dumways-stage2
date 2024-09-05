import { Flex, Heading, LinkOverlay, Text } from '@chakra-ui/react';

interface NavbarItemProps {
  icon: string;
  text: string;
  link: string;
}

export function NavbarItem({ icon, text, link }: NavbarItemProps) {
  return (
    <Heading>
      <LinkOverlay href={link}>
        <Flex alignItems="center" style={{
            width: '337px',
            height: '64px',
            padding: '4',
            marginLeft: '40px',
            gap: '4'
        }}>
          <img src={icon} alt={`${text} Icon`} style={{ marginRight: "20px"}} />
          <Text fontSize="18px" fontWeight='500' lineHeight='24px'>{text}</Text>
        </Flex>
      </LinkOverlay>
    </Heading>
  );
}
