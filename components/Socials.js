import React from 'react'
import { Stack, Image, Link, Box, Flex } from '@chakra-ui/react'

const Socials = () => {
    return (
        <Flex >
                <Link><Image alt='linkedin' src='LinkedIn.png' h='10' /></Link>
                <Link><Image alt='github' src='GitHub.png' h='10' /></Link>
                <Link><Image alt='email' src='Email.png' h='10' /></Link>
        </Flex>
    )
}

export default Socials