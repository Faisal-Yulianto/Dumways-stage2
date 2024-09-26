import { Box, Flex,Text } from "@chakra-ui/react";
import { Navbar } from "../base/MainComp/sidebar-left";
import { SugestItem,DevItem } from "../base/component/SugestItem";
import  { ProfilePageItem} from './ProfilePageItem'

export function ProfilePageParent(){
  return (
    <Box backgroundColor={'#1D1D1D'}>
      <Flex>
      <Box>
      <Navbar home={"home.png"} follow={"heart.png"} search={"user-search.png"} profile={"useractive.png"}/>
      </Box>
        <ProfilePageItem/>
      <Flex direction={'column'}>
      <Box width='500px' p={10} m={5} backgroundColor={'#262626'} borderRadius={'md'}>
      <Text fontSize='24px' p={4}>Sugested for you</Text>
      <SugestItem avatar={<div><img src="avatar.png"/></div>} name={"Faisal yulianto"} alias={"@faisal"} button={"follow"}/>
      <SugestItem avatar={<div><img src="avatar.png"/></div>} name={"Faisal yulianto"} alias={"@faisal"} button={"follow"}/>
      <SugestItem avatar={<div><img src="avatar.png"/></div>} name={"Faisal yulianto"} alias={"@faisal"} button={"follow"}/>
      </Box>
      <Box p='18px' ml={'3px'}>  
      <DevItem/>
      </Box>
      </Flex>
      
      </Flex>
    </Box>
  )
}
