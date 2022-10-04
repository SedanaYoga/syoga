import Image from 'next/image'
import React, { useState } from 'react'
import { IProject } from '../types/project.type'
import NewTab from './NewTab'

type Props = {
  project: IProject
}

const ProjectItem = ({ project }: Props) => {
  const { name, imageUrl, description, techStack, year, repository, site } =
    project

  const [isShow, setIsShow] = useState<boolean>(false)

  const toggle = () => setIsShow((prev) => !prev)

  return (
    <div className='py-4 border-b-[3px] border-bwport-100'>
      <div
        onClick={toggle}
        className='cursor-pointer flex flex-row justify-between'
      >
        <div className='flex flex-row'>
          <div className='mr-4'>
            <Image src={imageUrl} alt='asuki' width='30' height='30' />
          </div>
          <h1 className='uppercase font-bold text-[1.5rem]'>{name}</h1>
        </div>
        <h1 className='uppercase font-bold text-[1.5rem]'>{year}</h1>
      </div>
      <div
        className={`${
          isShow ? 'flex' : 'hidden'
        } flex-col justify-center items-center`}
      >
        <div className='flex flex-row gap-2 my-3 p-2 border-2 border-bwport-100 rounded-full'>
          {techStack.map((tech, i) => (
            <Image
              src={tech}
              alt={`tech-${i}`}
              key={i}
              width='30'
              height='30'
            />
          ))}
        </div>
        <p className='leading-5 text-sm text-bwport-400 mb-2'>{description}</p>
        <div className='w-full flex flex-row gap-3 text-black font-medium justify-end'>
          <NewTab link={repository}>Open Repository</NewTab>
          <NewTab link={site}>Live Website</NewTab>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
