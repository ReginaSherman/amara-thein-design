import 'focus-visible/dist/focus-visible'
import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'

import Projects from '../components/Projects'

export default function Home () {
  return (
    <>
      <Head>
        <title>Amara Utter</title>
        <meta property='og:title' content='Amara Utter' key='title' />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Projects />
    </>
  )
}

{
}
