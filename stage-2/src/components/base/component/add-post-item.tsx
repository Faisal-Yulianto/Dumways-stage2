import { Input, Box, Image, Flex, Text } from '@chakra-ui/react';
import avatar from '../../../assets/avatar/avatar (1).png';
import upload from '../../../assets/icon/gallery-add.png';

export function PostItem() {
  const handleUploadClick = () => {
    const fileInput = document.getElementById('file-upload');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <Box width='100%'  pl={7} pb={5} gap={3} borderBottom='1px' borderColor={'gray'}>
      <Text fontSize='28px' fontWeight={700} mb={5}>Home</Text>
      <Flex>
        <Box>
          <Image
            borderRadius='full'
            boxSize='40px'
            src={avatar}
          />
        </Box>
        <Box width='590px' height='40px' p={3}>
          <Input variant='unstyled' placeholder='What is happening?' />
        </Box>
        <Box p={3}>
          <input
            id='file-upload'
            type="file"
            style={{ display: 'none' }}
          />
          <Image
            src={upload}
            alt="Upload"
            cursor="pointer"
            width="24px" 
            height="24px"
            onClick={handleUploadClick}
          />
        </Box>
        <Box p={2}>
          <button type='submit' style={{
            backgroundColor: '#005E0E',
            borderRadius: '50px',
            width: '63px',
            height: '33px',
            fontSize: '14px',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}>Post</button>
        </Box>
      </Flex>
    </Box>
  );
}
