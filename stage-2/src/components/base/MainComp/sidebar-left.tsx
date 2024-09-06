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
          <NavbarItem icon={home} text='Home' link='qw' />
          <NavbarItem icon={search} text='Search' link='wq' />
          <NavbarItem icon={follow} text='Follow' link='wq'/>
          <NavbarItem icon={profile} text='Profile' link='wq'/>
          <ButtonGreen>Create Post</ButtonGreen>
        </Box>
        <Box pt='470px'>
          <NavbarItem icon='logout.png' text="Logout" link="#logout" />
        </Box>
      </Box>

    );
  }
