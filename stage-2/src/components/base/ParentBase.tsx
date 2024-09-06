import { Flex } from '@chakra-ui/react'
import { Navbar } from "./MainComp/sidebar-left";
import { BaseLayout } from "./MainComp/base-layout"
import { SidebarRight } from "./MainComp/sidebar-right"

export function ParentBase() {
  return (
    <Flex style={{backgroundColor: '#1D1D1D'}}>
      <Navbar home={'homeactive.png'} follow={'heart.png'} search={'user-search.png'} profile={'profile-circle.png'}/>
      <BaseLayout/>
      <SidebarRight/>
    </Flex>
  );
}
