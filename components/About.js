
import React from 'react'
import { Box, Flex, Stack, Image } from '@chakra-ui/react'
import Socials from './Socials'

const About = () => {
    return (
        <div id='about'>
            <Box >
                <Box fontFamily={'Bodoni Moda'} fontSize={'6xl'} fontWeight={'bold'} align={'center'}>
                    <br /> about me
                <Image
                    borderRadius='full'
                    boxSize='200px'
                    fit='cover'
                    // border='4px'
                    src='Headshot.png'
                    alt='headshot'
                />
                </Box>
                <Box fontFamily='Raleway' fontSize='2xl' mt={5}>
                    I want to make technology more accessible and straight-forward <br />
                    for the average person. Because of my interest in and understanding <br />
                    of design, I can bridge the gap between developers and UI designers <br />
                    to form a cohesive front-end team. <br />
                    I want to make technology more accessible and straight-forward <br />
                    for the average person. Because of my interest in and understanding <br />
                    of design, I can bridge the gap between developers and UI designers <br />
                    to form a cohesive front-end team.
                </Box>
                    <Socials />

            </Box>
        </div>

    )
}

export default About