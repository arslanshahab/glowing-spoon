import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { routes } from '../constants/routes'
import { Texts } from '../constants/texts'
import Button from '../components/Button'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'
import Carousel from '../components/Carousel'
import Faq from '../components/Faq'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Forest.io</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='relative w-screen bg-image min-h-screen overflow-x-hidden overflow-y-visible '>
        <Header />
        <div className='my-14 px-4 mx-auto max-w-[70ch] text-center'>
          <Image src='/assets/imgs/tree.png' width={80} height={80} alt='Tree' />
          <h1 className='font-bold mt-4 px-4 text-[32px] md:text-[40px] max-w-[50ch] lg:whitespace-pre-wrap'>
            {Texts.headline}
          </h1>
          <p className='text-base my-4'>{Texts.sub}</p>
          <Link href={routes.openSea} passHref>
            <a target='_blank'>
              <Button reverse>{Texts.explore}</Button>
            </a>
          </Link>
          <ProgressBar />
        </div>
        <div className='lg:mx-16 2xl:mx-[220px] overflow'>
          <Carousel />
        </div>
        <Faq />
        <div className='w-screen'>
          <div className='absolute w-screen bg-gradient-to-b from-white to-solitude bg-opacity-50 mix-blend-darken'>
            <div className='w-full lg:w-9/12 xl:w-3/4 mx-auto flex flex-col justify-center px-4 my-8'>
              <Image
                src='/assets/imgs/mapimgwithoutbg.png'
                width={1006}
                height={529}
                layout='intrinsic'
                alt='Green world map'
                className=''
              />
              <div className='mx-auto px-4 max-w-[60ch] text-center'>
                <h2 className='font-bold mt-4 px-4 mx-auto text-[32px] md:text-[40px]'>{Texts.bottomTitle}</h2>
                <p className='text-base my-4'>{Texts.bottomText}</p>
                <Link href={routes.discord} passHref>
                  <a>
                    <Button>{Texts.community}</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
