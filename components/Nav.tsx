import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { HiMenuAlt3 } from 'react-icons/hi'

type Props = {}

const Nav = ({}: Props) => {
  return (
    <nav className='w-full flex flex-row justify-center items-center h-[60px] fixed z-10'>
      <Link href='/'>
        <a className='h-[40px]'>
          <motion.div
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            transition={{
              type: 'spring',
              duration: 3,
              delay: 0.8,
              bounce: 0.7,
            }}
          >
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/portal-6902c.appspot.com/o/images%2Fprofile-ava.png?alt=media&token=20f8b944-6e48-4ac9-9107-5f7583d72db6'
              alt='logo'
              width='40'
              height='40'
              className='rounded-full'
            />
          </motion.div>
        </a>
      </Link>
      <div className='absolute right-[20px] top-[10px]'>
        <HiMenuAlt3 size='25px' />
      </div>
    </nav>
  )
}

export default Nav
