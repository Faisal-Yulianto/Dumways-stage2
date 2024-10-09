import { Box, Flex } from '@chakra-ui/react'
import { Navbar } from "./MainComp/sidebar-left";
import { BaseLayout } from "./MainComp/base-layout"
import { SidebarRight } from "./MainComp/sidebar-right"

export function ParentBase() {
  return (
    <Flex style={{backgroundColor: '#1D1D1D'}} h={'max-content'} w={'max-content'} >
      <Box>
      <Navbar home={'homeactive.png'} follow={'heart.png'} search={'user-search.png'} profile={'profile-circle.png'}/>
      </Box>
      <Box>
      <BaseLayout/>
      </Box>
      <Box>
      <SidebarRight/>
      </Box>
    </Flex>
  );
}
