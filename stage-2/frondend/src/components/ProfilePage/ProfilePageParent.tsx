import { Box, Flex, Text } from "@chakra-ui/react";
import { Navbar } from "../base/MainComp/sidebar-left";
import { SugestItem, DevItem } from "../base/component/SugestItem";
import { ProfilePageItem } from './ProfilePageItem';

export function ProfilePageParent() {
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
          search={"user-search.png"} 
          profile={"useractive.png"} 
        />
      </Box>

      {/* Konten Utama dan Sidebar Kanan */}
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
        <ProfilePageItem />
      </Box>

      {/* Sidebar SugestItem dan DevItem */}
      <Box 
        width="30%" 
        height="100vh" 
        position="fixed"  
        top="0" 
        right="0" 
        overflow="hidden"  
        p={5}
      >
        <Box backgroundColor={'#262626'} borderRadius={'md'} p={5} mb={5}>
          <Text fontSize="24px" p={4}>Suggested for you</Text>
          <SugestItem avatar={<div><img src="avatar.png" alt="Avatar"/></div>} name="Faisal Yulianto" alias="@faisal" button="Follow" />
          <SugestItem avatar={<div><img src="avatar.png" alt="Avatar"/></div>} name="Faisal Yulianto" alias="@faisal" button="Follow" />
          <SugestItem avatar={<div><img src="avatar.png" alt="Avatar"/></div>} name="Faisal Yulianto" alias="@faisal" button="Follow" />
        </Box>

        <Box>
          <DevItem />
        </Box>
      </Box>
    </Flex>
  );
}
