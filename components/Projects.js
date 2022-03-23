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
                    <SimpleGrid columns={[1, 1, 2, 2]} spacing={10} width={[400, 400, 1000, 1000]} mt={10}>
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