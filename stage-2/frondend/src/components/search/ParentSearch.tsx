import { Box, Flex } from "@chakra-ui/react";
import { SearchItem } from "../search/SearchItem";
import { Navbar } from "../base/MainComp/sidebar-left";
import { SidebarRight } from "../base/MainComp/sidebar-right";

export function SearchParent() {
  return (
    <Flex 
      style={{ backgroundColor: '#1D1D1D' }} 
      height="100vh" 
      width="100vw"
    >
      {/* Sidebar Kiri */}
      <Box 
        width="20%"  
        height="100vh" 
        position="fixed"  
        top="0" 
        left="40px" 
        overflow="hidden"
      >
        <Navbar
          home={"home.png"}
          follow={"heart.png"}
          search={"useractive.png"}
          profile={"profile-circle.png"}
        />
      </Box>

      {/* Konten Utama */}
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
        <SearchItem />
      </Box>

      {/* Sidebar Kanan */}
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
