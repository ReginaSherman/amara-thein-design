import React from 'react'
import { projects } from '../public/constants/projects'
const ProjectCard = ({ project }) => {
  return (
    <div>
      {/* <Box align={'center'}>
        <Link
          href={project.gitLink}
          target='_blank'>
          <Image
            alt={project.title}
            src={project.image}
            />
        </Link><br />
        <Box
          fontFamily={'Bodoni Moda'}
          fontSize={'2xl'}
          fontWeight={'bold'}>
          {project.title}
        </Box>
        <Box
          maxW={600}
          fontFamily={'Roboto'}>
          {project.subTitle}
        </Box>
        <Box
          fontFamily={'Roboto'}
          fontStyle={'italic'}>
          Tech Used: {project.labels}
        </Box>
        <Button
          m={5}
          bg='#6e8069'
          color='#FFFAEF'
          href={project.gitLink}
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
          as={Link}
        >GitHub Repo</Button>
        <Button
          m={5}
          bg='#6e8069'
          color='#FFFAEF'
          href={project.deployedLink}
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
          as={Link}
        >Deployed App</Button>
      </Box> */}
    </div>
  )
}

export default ProjectCard