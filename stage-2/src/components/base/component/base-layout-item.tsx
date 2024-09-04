import { Box, Image,Flex,Text } from '@chakra-ui/react'
import message from '../../../assets/icon/message-text.png'
import follow from '../../../assets/icon/heart.png'

interface BaseItemProps{
    text:React.ReactNode;  
    icon:string;
    user:string;
    email:string;
    time:string;
    like:string;
    replies:string;
}

export function BaseLayoutItem({ text,icon,user,email,time,like,replies }: BaseItemProps){
    return (
        
            <Box width='700px' height='maxContent' border='1px' borderColor='gray' p={4}>
                <Flex>
                <Image
                    borderRadius='full'
                    boxSize='40px'
                    src={icon}
                />
                <Box>
                    <Flex gap={1} pl={3} fontSize='14px'>
                        <Text>{user}</Text>
                        <Text color={'gray'}>{email}</Text>
                        <Text color={'gray'}>{time}</Text>
                    </Flex>
                    <Box>
                        <Text p={3} color={'gray'} fontSize='14px' wordBreak='break-word' whiteSpace='break-spaces'>
                        {text}
                        </Text>
                        <Flex width='652px' height='32px' fontSize='14px' color={'gray'}>
                            <Flex pl={3}>
                                <img src={follow} style={{width:'24px',height:'24px'}} />
                                <Text pl={2}>{like}</Text>
                                
                            </Flex>
                            <Flex pl={5}>
                                <img src={message} style={{width:'24px',height:'24px'}} />
                                <Text pl={3}>{replies}</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
                </Flex>
            </Box>
    )
}