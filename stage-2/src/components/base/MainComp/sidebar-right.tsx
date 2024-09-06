import { Flex,Box,Text } from '@chakra-ui/react'
import { SidebarRightItem } from "../component/sidebar-right-item";
import { SugestItem,Follower,DevItem } from "../component/SugestItem";

export function SidebarRight () {
    return (
        <>
        <Flex direction={'column'} width='10px'>
            <SidebarRightItem 
                title={"Stella Audinha"} 
                cover={<div><img src='cover.png'/></div>}
                avatar={<div><img src='avatar.png' style={{border:'2px solid ',borderRadius:'50%'}}/></div>}
                alias={"@audinha"} 
                picked={"picked over by the worms, and weird fishes"} 
                follow={291}
                follower={23} 
                Edit={"Edit profile"}
            />
            <Box width='250px' height='max-content' p='20px' gap='16px' backgroundColor={'#262626'} margin='5px 20px' borderRadius='10'>
            <Text paddingBottom='10px'>Suggested for you</Text>
            <Follower
                avatar={<div><img src='avatar.png'/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
            />
            <SugestItem
                avatar={<div><img src='avatar.png'/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            <SugestItem
                avatar={<div><img src='avatar.png'/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            <SugestItem
                avatar={<div><img src='avatar.png'/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            <SugestItem
                avatar={<div><img src='avatar.png'/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            <SugestItem
                avatar={<div><img src='avatar.png'/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            <SugestItem
                avatar={<div><img src='avatar.png'/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            <SugestItem
                avatar={<div><img src='avatar.png'/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
                button={"follow"}
            />
            </Box>
            <Box>
                <DevItem/>
            </Box>
        </Flex>
        </>
    )
}