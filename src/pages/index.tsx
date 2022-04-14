import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Texts } from '../constants/texts'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Forest.io</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='my-20 mx-auto'>
        <div className='mx-auto max-w-[70ch] text-center'>
          <Image src='/assets/imgs/tree.png' width={80} height={80} alt='Tree' />
          <h1 className='font-bold text-[32px] md:text-[40px] max-w-[50ch]'>{Texts.headline}</h1>
          <p className='text-base my-4 '>{Texts.sub}</p>
        </div>
      </div>
    </>
  )
}

export default Home
