import React from 'react'
import { Box, Image, Button, Link } from '@chakra-ui/react'
import Socials from './Socials'
const Resume = () => {
    return (
        <div id='resume'>
            <Box h={750}>
                <Box fontFamily={'Bodoni Moda'} fontSize={'6xl'} fontWeight={'bold'} align={'center'}>
                    <br /> Resumé
                </Box>
                <Box fontFamily={'Raleway'} fontSize={'3xl'} mt={10} align={'center'}>
                    <Button
                        bg='#6e8069'
                        color='#FFFAEF'
                        href="https://docs.google.com/document/d/1wv9alj1PFM-ra2frpHLtsu_2Axu7Nh6kkOm5Jq1DnNo/export?format=pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        as={Link}
                    >Click Here To Download!</Button>
                </Box>
                <Box mt={10}>
                    <Socials />
                </Box>
                <Image alt='illustration' src='Olá - Planting.png' position='relative' h='300px' ml={[null, null, 700, 700]} />
            </Box>
        </div>

    )
}

export default Resume
