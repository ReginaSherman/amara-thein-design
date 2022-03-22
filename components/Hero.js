import React from 'react'
import { Box, Image, Stack, Flex } from '@chakra-ui/react'


const Hero = () => {
    return (
        <div id='home'>
            <Box h='800px' mt={24}>
                <Box fontFamily={'Bodoni Moda'} fontSize={'6xl'} fontWeight={'bold'} align={'center'}>
                    <br /> regina sherman
                    <Box fontFamily={'Bodoni Moda'} fontSize={'3xl'}>
                        &quot;a full-stack software engineer with a focus on front-end <br />
                        development and creating beautiful, intuitive user experiences&quot;
                    </Box>
                        <Stack direction={'row'}>
                            <Image alt='linkedin' src='LinkedIn.png' h='16' />
                            <Image alt='github' src='GitHub.png' h='16' />
                            <Image alt='email' src='Email.png' h='16' />
                        </Stack>
                    <Image alt='illustration' src='Olá - Relaxing (1).png' mt={75} w='700px' />
                </Box>
            </Box>

        </div>

    )
}

export default Hero