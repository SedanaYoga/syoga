import type { NextPage } from 'next'
import Head from 'next/head'
import Background from '../components/Background'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Projects from '../components/Projects'

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
      <main className='flex relative top-[60px] flex-col w-full px-[20px] z-20'>
        <section id='hero'>
          <Hero />
        </section>
        <section id='background'>
          <Background />
        </section>
        <section id='projects'>
          <Projects />
        </section>
      </main>
    </div>
  )
}

export default Home
