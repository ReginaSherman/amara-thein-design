import React from 'react'
import { Box, Image, Flex } from '@chakra-ui/react'

const Hero = () => {
    return (
        <div id='home' >
            <Box mt={[14, 14, 0, 0]} h={675}>
                <Box fontFamily={'Bodoni Moda'} fontSize={['4xl', '4xl', '6xl', '6xl']} fontWeight={'bold'} align={'center'}>
                    <br /> Regina Sherman
                    <Box mt={10} fontFamily={'Roboto'} fontWeight='light' fontSize={['2xl', '2xl', '3xl', '3xl']}>
                        &quot;a full-stack software engineer with a focus on front-end <br />
                        development and creating beautiful, intuitive user experiences&quot;
                    
                    </Box>
                    <Image alt='illustration' src='Olá - Relaxing (1).png' mt={5} w='700px' />
                </Box>
            </Box>
        </div>

    )
}

export default Hero