import React from 'react'
import { Stack, Image } from '@chakra-ui/react'

const Socials = () => {
    return (
        <Stack direction={'row'}>
            <Image alt='linkedin' src='LinkedIn.png' h='10' />
            <Image alt='github' src='GitHub.png' h='10' />
            <Image alt='email' src='Email.png' h='10' />
        </Stack>
    )
}

export default Socials