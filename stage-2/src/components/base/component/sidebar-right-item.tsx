import {  Card, CardBody,Text,Box,Flex } from "@chakra-ui/react";
import cover from '../../../assets/cover.png'
import  Avatar  from "../../../assets/icon/avatar.png";

export function SidebarRightItem() {
  return (
    <>
      <Card width='563px' height='361' p='20px' gap='16px' backgroundColor={'#1D1D1D'}>
        <CardBody width='100%' p={4} borderRadius={10} backgroundColor={'#262626'}>
          <Text color={'#FFFFFF'} fontSize='15px'>My Profile</Text>
          <Box>
            <img src={cover} />
        </Box>
        <Box>
            <Flex justifyContent={'space-between'}>
                <img src={Avatar} style={{width:'40px',position:'relative',left:'15px', top:'-20px'}}/>
                <Box>
                    <button 
                        style={{color:'white',
                        fontSize:'10px',
                        border:'1px solid ',
                        alignItems:'end',
                        borderRadius:'20px',
                        padding:'5px',
                        height:'25px',
                        marginTop:'6px'}}>
                        Edit Profile
                    </button>
                </Box>
            </Flex>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Box>
            <Text></Text>
            <Text></Text>
            </Box>
        </Box>
        </CardBody>
       
      </Card>
    </>
  );
}
