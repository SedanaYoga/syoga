import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='font-inter'>
      <Head>
        <title>Home - syoga</title>
        <meta
          name='description'
          content='Home page for Sedana Yoga portfolio'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='w-full flex flex-row justify-center items-center h-[60px] fixed z-10'>
        <Link href='/'>
          <a className='h-[40px]'>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/portal-6902c.appspot.com/o/images%2Fprofile-ava.png?alt=media&token=20f8b944-6e48-4ac9-9107-5f7583d72db6'
              alt='logo'
              width='40'
              height='40'
              className='rounded-full'
            />
          </a>
        </Link>
        <div></div>
      </nav>
      <main className='flex relative top-[60px] flex-col w-full h-[4000px] px-[20px] bg-red-200'>
        <h1 className='text-red-500 font-bold'>Hello</h1>
      </main>
    </div>
  )
}

export default Home
