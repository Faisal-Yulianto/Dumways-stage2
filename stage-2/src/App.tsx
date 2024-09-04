import { Flex } from '@chakra-ui/react'
import { Navbar } from "./components/base/sidebar-left";
import { BaseLayout } from "./components/base/base-layout"
import { SidebarRight } from "./components/base/sidebar-right"

function App() {
  return (
    <Flex style={{backgroundColor: '#1D1D1D'}}>
      <Navbar/>
      <BaseLayout/>
      <SidebarRight/>
    </Flex>
  );
}
export default App;

