import { Box, Flex } from "@chakra-ui/react";
import { SearchItem } from "../search/SearchItem";
import { Navbar } from "../base/MainComp/sidebar-left";
import { SidebarRight } from "../base/MainComp/sidebar-right";

export function SearchParent() {
  return (
    <>
    <Box>
      <Flex>
        <Box>
        <Navbar
          home={"home.png"}
          follow={"heart.png"}
          search={"useractive.png"}
          profile={"profile-circle.png"}
        />
        </Box>
        <SearchItem />
        <SidebarRight />
      </Flex>
      </Box>
    </>
  );
}
