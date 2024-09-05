import { Box } from '@chakra-ui/react'
import logo  from '../../../assets/logo.png';
import home from '../../../assets/icon/homeactive.png'
import heart from '../../../assets/icon/heart.png'
import profile from '../../../assets/icon/profile-circle.png'
import search from '../../../assets/icon/user-search.png'
import logout from '../../../assets/icon/logout.png'
import {NavbarItem} from '../component/sidebar-item'
import { ButtonGreen } from '../component/button-green';

export function Navbar() {
    return (
      <Box as='article' 
          maxW='sm' p='5' 
          rounded='md' 
          backgroundColor={"#1D1D1D"} 
          width='417px' 
          height='1035px'
          border='1px'
          borderColor='gray'
          >
        <Box mb={8} style={{
          margin: '40px 20px',
        }}>
          <img src={logo} alt="Logo" />
        </Box >
        <Box style={{
          width: '337px',
          height: '340px',
        }}>
          <NavbarItem icon={home} text="Home" link="#home" />
          <NavbarItem icon={heart} text="Follow" link="#follow" />
          <NavbarItem icon={profile} text="Profile" link="#profile" />
          <NavbarItem icon={search} text="Search" link="#search" />
          <ButtonGreen>Create Post</ButtonGreen>
        </Box>
        <Box pt='470px'>
          <NavbarItem icon={logout} text="Logout" link="#logout" />
        </Box>
      </Box>

    );
  }
