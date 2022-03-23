import React from 'react'
import { Box, Image, Flex, SimpleGrid } from '@chakra-ui/react'
import { projects } from '../public/constants/projects'

import ProjectCard from './ProjectCard'


const Projects = () => {
    return (
        <div id='projects'>
            <Box mt={[32, 32, 0, 0]}>
                <Box fontFamily={'Bodoni Moda'} fontSize={'6xl'} fontWeight={'bold'} align={'center'}>
                    <br /> projects
                </Box>
                <Flex>
                    <SimpleGrid columns={1} spacing={10} w={[400, 400, 800, 800]} mt={10}>
                        {projects.map(project => {
                            return (
                                <>
                                    <ProjectCard project={project} />
                                </>
                            )
                        })}

                    </SimpleGrid>
                </Flex>
            </Box>
        </div>

    )
}

export default Projects