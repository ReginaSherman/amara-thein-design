import { Box, Flex, Container } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'

export default function Home() {
  return (
    <Box bg='#FFFAEF'>
      <Box m={[5, 5, 0, 0]} mt={[0, 0, 0, 0]}>
        <Header /> <br />
        <Flex justify='center' >
          <Hero />
        </Flex>
        <Flex justify='center'>
          <About />
        </Flex>
        <br />
        <Flex justify='center'>
          <Projects />
        </Flex>
        <Flex justify='center'>
          <Resume />
        </Flex>
      </Box>

    </Box>
  )
}
