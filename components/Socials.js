import React from 'react'
import { Stack, Image, Link, Box, Flex } from '@chakra-ui/react'

const Socials = () => {
    return (
        <Flex mt={10} ml={[100, 100, 325, 325]} >
                <Link href='https://www.linkedin.com/in/regina-sherman/' target='_blank' p={3}><Image alt='linkedin' src='LinkedIn.png' h='10' /></Link>
                <Link href='https://github.com/ReginaSherman' target='_blank' p={3}><Image alt='github' src='GitHub.png' h='10' /></Link>
                <Link href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=reginaxsherman@gmail.com' target='_blank' p={3}><Image alt='email' src='Email.png' h='10' /></Link>
        </Flex>
    )
}

export default Socials