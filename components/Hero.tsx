import React from 'react'
import { motion } from 'framer-motion'
import CButton from './CButton'

type Props = {}

const Hero = ({}: Props) => {
  const variants = {
    heroTextParent: {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5,
          delayChildren: 0.3,
        },
      },
    },
    item: {
      show: { opacity: 1 },
      hidden: { opacity: 0 },
    },
  }

  return (
    <div className='relative h-[calc(100vh-60px)] w-full gridMobile'>
      <div className='mt-[-200px] flex flex-col justify-center items-center font-bold text-2xl col-span-8'>
        <motion.div
          className='text-center'
          variants={variants.heroTextParent}
          initial='hidden'
          animate='show'
        >
          <motion.h1 variants={variants.item} className='text-bwport-500'>
            sedanayoga
          </motion.h1>
          <motion.h1 variants={variants.item} className='text-bwport-400'>
            softwareengineer
          </motion.h1>
          <motion.h1 variants={variants.item} className='text-bwport-300'>
            design.code.movies
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{ duration: 1 }}
          className='overflow-hidden mt-4 pt-5 border-t-2 w-[15rem] h-[10rem]'
        >
          <motion.div
            initial={{
              y: -150,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              type: 'spring',
              duration: 2,
              bounce: 0.5,
              delay: 0.8,
            }}
            className='flex flex-col justify-center items-center gap-4'
          >
            <CButton className='w-full'>background</CButton>
            <CButton className='w-full bg-bwport-400'>skills</CButton>
          </motion.div>
        </motion.div>
      </div>
      <div className='absolute bottom-5 inset-x-auto col-span-8 pt-12 px-4 bg-bwport-100 pb-5'>
        <h1 className='text-sm font-semibold mb-2 text-bwport-500'>
          Hi, call me <span className='underline'>Yoga</span>
        </h1>
        <p className='text-xs text-bwport-300 leading-4'>
          A guy from Bali who has job to design, code, protect your eyes from
          crap website out there.
        </p>
        <p className='text-xs text-bwport-300 leading-4 mb-3'>
          Here&apos;s my favorite color:{' '}
          <span className='font-semibold px-1 text-bwport-0 bg-bwport-400'>
            #666666
          </span>
        </p>
        <p className='text-xs text-bwport-300'>
          Best Regards,{' '}
          <span className='block text-bwport-400'>
            Your lovely frontend-dev
          </span>
        </p>
      </div>
    </div>
  )
}

export default Hero
