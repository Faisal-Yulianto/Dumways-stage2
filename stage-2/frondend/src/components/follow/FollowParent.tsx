import { FollowItem } from '../follow/FollowItem'
import { Navbar } from '../base/MainComp/sidebar-left';
import { Flex } from "@chakra-ui/react";
import { SidebarRight } from '../base/MainComp/sidebar-right';

export default function FollowParent() {
    return (
        <>
            <Flex>
                <Navbar home={'home.png'} follow={'heartactive.png'} search={'user-search.png'} profile={'profile-circle.png'}/>
                <FollowItem/>
                <SidebarRight/>
            </Flex>
        </>
    )
}













