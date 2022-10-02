import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

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

      {/* NavBar */}
      <Nav />

      {/* Main Section */}
      <main className='flex relative top-[60px] flex-col w-full px-[20px]'>
        <Hero />
      </main>
    </div>
  )
}

export default Home
