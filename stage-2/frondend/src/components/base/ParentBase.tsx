import { Box, Flex } from '@chakra-ui/react';
import { Navbar } from "./MainComp/sidebar-left";
import { BaseLayout } from "./MainComp/base-layout";
import { SidebarRight } from "./MainComp/sidebar-right";

export function ParentBase() {
  return (
    <Flex 
      style={{ backgroundColor: '#1D1D1D' }} 
      height="100vh" 
      width="100vw"  
    >
      <Box 
        width="20%"  
        height="100vh" 
        position="fixed"  
        top="0" 
        left="40px" 
        overflow="hidden" 
      >
        <Navbar 
          home={'homeactive.png'} 
          follow={'heart.png'} 
          search={'user-search.png'} 
          profile={'profile-circle.png'}
        />
      </Box>
      <Box 
        width="45%"  
        marginLeft="25%"  
        marginRight="25%"   
        overflowY="scroll" 
        css={{
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <BaseLayout />
      </Box>
      <Box 
        width="30%" 
        height="100vh" 
        position="fixed"  
        top="0" 
        right="0" 
        overflow="hidden"  
      >
        <SidebarRight />
      </Box>
    </Flex>
  );
}

