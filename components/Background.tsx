import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import CButton from './CButton'

type Props = {}

const Background = ({}: Props) => {
  const variants = {
    bgText: {
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
    bgTextItem: {
      hidden: {
        x: -500,
      },
      show: {
        x: 0,
      },
    },
  }
  return (
    <div className='relative pt-20 h-screen w-full'>
      <div className='absolute inset-0 h-screen w-[250px] bg-bwport-100 z-0' />
      <div className='overflow-x-hidden relative w-full gridMobile z-10'>
        <h1 className='col-span-4 mb-4 text-center text-2xl text-bwport-400'>
          background
        </h1>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='relative aspect col-span-3 h-auto col-start-2 bg-bwport-400'
        >
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/portal-6902c.appspot.com/o/images%2Fprofile%2Fprofile-casual-pale.png?alt=media&token=a76deeeb-dc95-4adf-ab5f-a2a4981628f9'
            alt='background-image'
            layout='responsive'
            width={257}
            height={262}
            objectFit='cover'
          />
        </motion.div>
        <motion.div
          variants={variants.bgText}
          initial='hidden'
          whileInView='show'
          className='col-start-2 col-span-3 text-bwport-500'
        >
          <motion.div variants={variants.bgTextItem} className=' text-xs mt-5 '>
            <h1 className='text-xl font-bold'>Actually,</h1>
            <p className='text-right mt-3'>
              I don’t have CS degree instead I took Biomedical Engineering back
              in the day, started career as Quality Assurance.
            </p>
          </motion.div>
          <motion.div variants={variants.bgTextItem} className=' text-xs mt-3'>
            <h1 className='text-xl text-right font-bold'>However,</h1>
            <p className='text-left mt-3'>
              <span className='font-bold'>I’m</span> extremely thrilled with Web
              Development thing, mainly in frontend part. I work for a
              healthcare startup and feeling blessed so that I can connect my
              background to it. <span className='font-bold'>Happy!</span>
            </p>
          </motion.div>
        </motion.div>
        <CButton
          className='col-span-3 col-start-2 mt-10 text-bwport-100'
          color='dark'
        >
          see what I can do
        </CButton>
      </div>
    </div>
  )
}

export default Background
