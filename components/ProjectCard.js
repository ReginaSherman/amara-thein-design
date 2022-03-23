import React from 'react'
import { Box, Image, Link } from '@chakra-ui/react'
const ProjectCard = ({project}) => {
  return (
    <div>
        <Box background={'white'} align={'center'} >
          <Image alt={project.title} src={project.image} />
          <Link fontFamily={'Bodoni Moda'} fontSize={'xl'} fontWeight={'bold'} href={project.link} target='_blank'>{project.title}</Link>

        </Box>
    </div>
  )
}

export default ProjectCard