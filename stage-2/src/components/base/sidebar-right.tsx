import { Flex,Box,Text } from '@chakra-ui/react'
import { SidebarRightItem } from "./component/sidebar-right-item";
import { SugestItem,Follower } from "./component/SugestItem";
import background from '../../assets/cover.png'
import  Avatar  from "../../assets/icon/avatar.png";

export function SidebarRight () {
    return (
        <>
        <Flex direction={'column'} width='10px'>
            <SidebarRightItem 
                    title={"Stella Audinha"}
                    cover={<div><img src={background} /></div>}
                    avatar={<div><img src={Avatar} /></div>}
                    alias={"@audinha"}
                    picked={"picked over by the worms, and weird fishes"}
                    follow={291}
                    follower={23} Edit={''}            />
            <Box width='250px' height='330px' p='20px' gap='16px' backgroundColor={'#262626'} margin='5px 20px' borderRadius='10'>
            <Text paddingBottom='10px'>Suggested for you</Text>
            <Follower
                avatar={<div><img src={Avatar}/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
            />
            <SugestItem
                avatar={<div><img src={Avatar}/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            <SugestItem
                avatar={<div><img src={Avatar}/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            <SugestItem
                avatar={<div><img src={Avatar}/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            <SugestItem
                avatar={<div><img src={Avatar}/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            <SugestItem
                avatar={<div><img src={Avatar}/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            
            </Box>
        </Flex>
        </>
    )
}