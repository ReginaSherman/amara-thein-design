import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ project }) => {
  console.log(project)
  return (
    <div>
      <div className='project-txt' key={project.key}>
        <h2 className='green'>{project.title}</h2>
      </div>
      <div className='project-samples'>
        <div className='project-samples__card'>
          <a
            href={project.samples.sample1.link}
            target='_blank'
            rel='noopener noreferrer'
            className='link-item'
          >
            <img src={project.samples.sample1.image}></img>
          </a>
        </div>
        <div className='project-samples__card'>
          <a
            href={project.samples.sample2.link}
            target='_blank'
            rel='noopener noreferrer'
            className='link-item'
          >
            <img src={project.samples.sample2.image}></img>
          </a>
        </div>
        <div className='project-samples__card'>
          <a
            href={project.samples.sample3.link}
            target='_blank'
            rel='noopener noreferrer'
            className='link-item'
          >
            <img src={project.samples.sample3.image}></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
