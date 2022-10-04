import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

type Props = {
  link?: string
  children: React.ReactNode
}

const NewTab = ({ link, children }: Props) => {
  return (
    <a
      className='flex flex-row gap-1 justify-center items-center'
      target='_blank'
      href={link}
      rel='noopener noreferrer'
    >
      <FiExternalLink size={15} />
      <p className='text-sm'>{children}</p>
    </a>
  )
}

export default NewTab
