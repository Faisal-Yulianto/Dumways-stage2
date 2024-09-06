import { Flex,Text,Box } from '@chakra-ui/react'
import { SidebarRightItem } from "./component/sidebar-right-item";
import { SugestItem,Follower } from "./component/SugestItem";
import background from '../../assets/cover.png'
import  Avatar  from "../../assets/icon/avatar.png";

export function SidebarRight () {
    return (
        <>
        <Flex direction={'column'}>
            <SidebarRightItem 
                    title={"Stella Audinha"}
                    cover={<div><img src={background} /></div>}
                    avatar={<div><img src={Avatar} /></div>}
                    alias={"@audinha"}
                    picked={"picked over by the worms, and weird fishes"}
                    follow={291}
                    follower={23} Edit={''}            
            />
            <Text paddingBottom='px'>Suggeste for you</Text>
            <Follower
                avatar={<div><img src={Avatar}/></div>}
                name={"Mohammed jawahir"}
                alias={"@jawahir"}
            />
            <Box>
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