import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react'
import logo  from '../../../assets/logo.png';
import {NavbarItem} from '../component/sidebar-item'
import { ButtonGreen } from '../component/button-green';

interface NavProps {
  home:string;
  follow:string;
  search:string;
  profile:string;
}
export function Navbar({home,follow,search,profile}:NavProps) {
    return (
      <Box  
          p={10}
          rounded='md' 
          backgroundColor={"#1D1D1D"}  
          height='1400px'
          borderColor='gray'
          >
        <Box p={10}>
          <img src={logo} alt="Logo" />
        </Box >
        <Box >
          <Link to='/'>
            <NavbarItem icon={home} text='Home'/>
          </Link>
          <Link to= '/search'>
            <NavbarItem icon={search} text='Search'/>
          </Link>
          <Link to= '/follow'>
            <NavbarItem icon={follow} text='Follow'/>
          </Link>
          <Link to= '/profile'>
            <NavbarItem icon={profile} text='Profile'/>
          </Link>
          <ButtonGreen>Create Post</ButtonGreen>
        </Box>
        <Box mt={'700px'}>
        <Link to= '/login'>
          <NavbarItem icon='logout.png' text="Logout"/>
        </Link>
        </Box>
      </Box>

    );
  }