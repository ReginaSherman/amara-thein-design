import React from 'react'
import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link } from '@chakra-ui/react'
import "@fontsource/bodoni-moda"


const Header = () => {
    return (
        <>
            <Box >
                <Flex minH={['40px', '40px', '60px', '60px']} position='fixed' bg='#FFFAEF' w={1200}>
                    <Stack direction={'row'} spacing={[1, 1, 10, 10]} mt={[0, 0, 5, 5]} m={[0, 0, 5, 5]}>
                        <Link
                            p={2}
                            fontWeight={500}
                            _hover={{
                                textDecoration: 'none',
                                color: '#6e8069',
                            }}
                            fontFamily='Roboto'
                            fontSize={['xl', 'xl', '2xl', '2xl']}
                            href='#home'
                            ml={[6, 6, 0, 0]}>
                            HOME
                        </Link>
                        <Link
                            p={2}
                            fontWeight={500}
                            _hover={{
                                textDecoration: 'none',
                                color: '#6e8069',
                            }}
                            fontFamily='Roboto'
                            fontSize={['xl', 'xl', '2xl', '2xl']}
                            href='#about'>
                            ABOUT
                        </Link>
                        <Link
                            p={2}
                            fontWeight={500}
                            _hover={{
                                textDecoration: 'none',
                                color: '#6e8069',
                            }}
                            fontFamily='Roboto'
                            fontSize={['xl', 'xl', '2xl', '2xl']}
                            href='#projects'>
                            PROJECTS
                        </Link>
                        <Link
                            p={2}
                            fontWeight={500}
                            _hover={{
                                textDecoration: 'none',
                                color: '#6e8069',
                            }}
                            fontFamily='Roboto'
                            fontSize={['xl', 'xl', '2xl', '2xl']}
                            href='#resume'>
                            RESUME
                        </Link>
                        
                    </Stack>
                </Flex>
                
            </Box>
        </>
    )
}

export default Header