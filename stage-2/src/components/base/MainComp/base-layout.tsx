import { Box, Flex, Image } from '@chakra-ui/react'; 
import { BaseLayoutItem } from "../component/base-layout-item";
import { PostItem } from '../component/add-post-item';
import base from '../../../assets/Rectangle.png';

export function BaseLayout() {
    return (
        <Flex 
            direction='column' 
            pt={10}
            width='900px'
            borderRight='1px'
            borderLeft='1px'
            borderBottomColor={'gray'}  
        > 
            <PostItem />
            <Box mb={4}> 
                <BaseLayoutItem
                    icon={'avatar.png'}
                    text={
                        "Untuk 6 tahun terakhir, yes hahaha! Bukan bermaksud buat ngepush luck sampe batas terakhir, tapi semesta belum juga melunak "
                    }
                    user={"ngab-ngaban the explorer"}
                    email={"@devilbreak"}
                    time={"• 4h"}
                    like={"75"}
                    replies={"381 Replies"}
                />
            </Box>
            <Box mb={4}>
                <BaseLayoutItem
                    icon={'avatar.png'}
                    text={
                        "Untuk 6 tahun terakhir, yes hahaha! Bukan bermaksud buat ngepush luck sampe batas terakhir, tapi semesta belum juga melunak"
                    }
                    user={"ngab-ngaban the explorer"}
                    email={"@devilbreak"}
                    time={"• 4h"}
                    like={"75"}
                    replies={"381 Replies"}
                />
            </Box>
            <Box mb={4}>
                <BaseLayoutItem
                    icon={'avatar.png'}
                    text={
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus excepturi voluptatum reiciendis dolorum pariatur amet necessitatibus ullam illo voluptatem? 
                            <Image src={base} alt="Description" pt={2}  width='600px'/> 
                        </div>
                    }
                    user={"ngab-ngaban the explorer"}
                    email={"@devilbreak"}
                    time={"• 4h"}
                    like={"75"}
                    replies={"381 Replies"}
                />
            </Box>
        </Flex>
    );
}

