import{Box,Flex} from'@chakra-ui/react';
import { BaseLayoutItem } from "../component/base-layout-item";
import { PostItem } from '../component/add-post-item';
import base from '../../../assets/Rectangle.png'

export function BaseLayout() {
    return (
        <> 
            <Flex direction='column'>
                <PostItem/>
            <Box>
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
            /></Box>
            <Box>
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
            <Box>
             <BaseLayoutItem
                icon={'avatar.png'}
                text={  
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus excepturi voluptatum reiciendis dolorum pariatur amet necessitatibus ullam illo voluptatem?
                    <img src={base} alt="Description" style={{paddingTop:'5px'}} />
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
        </>
    );
}
