import React from 'react'
import { Box, Flex, Stack, Image } from '@chakra-ui/react'
import "@fontsource/roboto"

const About = () => {
    return (
        <div id='about'>
            <Box mt={[5, 5, 0, 0]}>
                <Box fontFamily={'Bodoni Moda'} fontSize={'6xl'} fontWeight={'bold'} align={'center'}>
                    <br /> About Me
                    <Image
                        borderRadius='full'
                        boxSize='200px'
                        fit='cover'
                        // border='4px'
                        src='sunflowers.png'
                        alt='headshot'
                    />
                </Box>
                <Box fontFamily='Roboto' fontSize='2xl' mt={5} align={'center'}>
                    I’m someone who is very committed to my work and my team, <br />
                    and puts all of myself into it. I’m looking for a place  <br />
                    to learn and grow in my new skills. I want to make technology <br />
                    more accessible and straight-forward for the average person. <br /> 
                    Because of my interest in and understanding of design, <br/>
                    I can bridge the gap between developers and UI designers <br />
                    to form a cohesive front-end team. 
                </Box>

            </Box>
        </div>

    )
}

export default About