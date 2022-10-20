import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ project }) => {
  const [isShown1, setIsShown1] = useState(false)
  const [isShown2, setIsShown2] = useState(false)
  const [isShown3, setIsShown3] = useState(false)


  return (
    <div>
      <div className='project-txt' key={project.key}>
        <h2 className='green'>{project.title}</h2>
      </div>
      <div className='project-samples'>
        <div
          className='project-samples__card'
          onMouseEnter={() => setIsShown1(true)}
          onMouseLeave={() => setIsShown1(false)}
        >
          <a
            href={project.samples.sample1.link}
            target='_blank'
            rel='noopener noreferrer'
            className='link-item'
          >
            <img src={project.samples.sample1.image}></img>
            {isShown1 && (
              <p className='project-name' >{project.samples.sample1.name}</p>
            )}
          </a>
        </div>
        <div
          className='project-samples__card'
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}
        >
          <a
            href={project.samples.sample2.link}
            target='_blank'
            rel='noopener noreferrer'
            className='link-item'
          >
            <img src={project.samples.sample2.image}></img>
            {isShown2 && (
              <p className='project-name'>{project.samples.sample2.name}</p>
            )}
          </a>
        </div>
        <div
          className='project-samples__card'
          onMouseEnter={() => setIsShown3(true)}
          onMouseLeave={() => setIsShown3(false)}
        >
          <a
            href={project.samples.sample3.link}
            target='_blank'
            rel='noopener noreferrer'
            className='link-item'
          >
            <img src={project.samples.sample3.image}></img>
            {isShown3 && (
              <p className='project-name'>{project.samples.sample3.name}</p>
            )}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
