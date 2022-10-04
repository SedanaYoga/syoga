import React from 'react'
import { projects } from '../data/projects.data'
import ProjectItem from './ProjectItem'

type Props = {}

const Projects = ({}: Props) => {
  return (
    <div className='relative pt-20 min-h-screen w-full text-bwport-500'>
      <div className='gridMobile'>
        <h1 className='col-span-4 pb-4 h-auto border-b-bwport-100 border-b-[3px] text-right font-normal text-2xl text-bwport-400'>
          projects
        </h1>
        <div className='flex flex-col col-span-4'>
          {projects.map((project, i) => (
            <ProjectItem project={project} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
