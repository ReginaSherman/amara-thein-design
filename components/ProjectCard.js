import React from 'react'
import { Box, Image, Link } from '@chakra-ui/react'
import { projects } from '../public/constants/projects'
const ProjectCard = ({ project }) => {
  return (
    <div>
      <Box align={'center'}>
        <Link
          href={project.link}
          target='_blank'>
          <Image
            alt={project.title}
            src={project.image} />
        </Link><br />
        <Box
          fontFamily={'Bodoni Moda'}
          fontSize={'2xl'}
          fontWeight={'bold'}>
          {project.title}
        </Box>
        <Box
          maxW={600}
          fontFamily={'Raleway'}>
          {project.subTitle}
        </Box>
        <Box
          fontFamily={'Raleway'}
          fontStyle={'italic'}>
          Tech Used: {project.labels}
        </Box>

      </Box>
    </div>
  )
}

export default ProjectCard