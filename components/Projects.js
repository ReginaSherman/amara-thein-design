import Card from './Card'
import { projects } from '../public/constants/projects'

const Projects = () => {
  return (
    <div>
      {projects.map(project => {
        return (
          <>
            <Card project={project} />
          </>
        )
      })}
    </div>
  )
}
export default Projects
