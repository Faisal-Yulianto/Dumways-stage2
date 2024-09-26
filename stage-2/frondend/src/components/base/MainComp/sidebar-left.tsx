import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import logo from "../../../assets/logo.png";
import { NavbarItem } from "../component/sidebar-item";
import { CreatePostModal } from '../../features/create-post'; // Impor modal yang baru

interface NavProps {
  home: string;
  follow: string;
  search: string;
  profile: string;
}

export function Navbar({ home, follow, search, profile }: NavProps) {
  return (
    <Box
      p={10}
      rounded="md"
      backgroundColor={"#1D1D1D"}
      borderColor="gray"
    >
      <Box p={10}>
        <img src={logo} alt="Logo" />
      </Box>
      <Box>
        <Link to="/">
          <NavbarItem icon={home} text="Home" />
        </Link>
        <Link to="/search">
          <NavbarItem icon={search} text="Search" />
        </Link>
        <Link to="/follow">
          <NavbarItem icon={follow} text="Follow" />
        </Link>
        <Link to="/profile">
          <NavbarItem icon={profile} text="Profile" />
        </Link>
        <CreatePostModal />
      </Box>
      <Flex 
      direction="column" 
      h="100vh" 
      justifyContent="space-between" 
      p={4} 
    >
      <Box>
      </Box>
      <Box>
        <Link to="/login">
          <NavbarItem icon="logout.png" text="Logout" />
        </Link>
      </Box>
    </Flex>
    </Box>
  );
}
