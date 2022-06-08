import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { routes } from '../constants/routes'
import { baseTotalValue, defaultMintedValue, Texts } from '../constants/texts'
import Button from '../components/Button'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'
import Carousel from '../components/Carousel'
import CollectionInfo from '../components/Collection'
import Faq from '../components/Faq'
import { http } from './../utils/http'
import { Globe } from '../constants/svgs'
import { assets } from '../constants/assets'
import { Introduction } from '../components/Introduction'

const Home: NextPage = () => {
  const [collection, setCollection] = useState<any>()

  useEffect(() => {
    ;(async () => {
      await getCollectionInfo()
    })()
  }, [])

  const getCollectionInfo = async () => {
    const response = await http.get('/collection/forestcongo', {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
      },
    })
    const data = response.data.collection
    // remove editors from collection
    const { editors, ...rest } = data
    setCollection(rest)
  }

  const handleFaqPress = () => {
    const section = document.querySelector('#faq-section')
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Head>
        <title>Forest.io</title>
        <meta name='description' content={Texts.headline} />
      </Head>
      <div className='relative w-screen bg-image bg-white '>
        {/* HEADER/NAVBAR */}
        <Header onFaqPress={handleFaqPress} />

        {/* HERO SECTION */}
        <div className='xs:pt-[70px] sm:mt-[140px] px-4 mx-auto max-w-[115ch] text-center'>
          <h1 className='font-semibold text-black mt-6 px-4 text-[40px] md:text-[56px] leading-tight lg:whitespace-pre-wrap'>
            {Texts.title}
          </h1>
          <p className='leading-snug sm:leading-tight font-normal mt-6 mb-6 text-[24px] md:text-[40px]'>
            {Texts.subtitle}
          </p>
          <Button reverse classes='my-4 xs:w-auto'>
            {Texts.learnMore}
          </Button>
        </div>

        {/* MAP IMAGE */}
        <div className='sm:mx-auto md:mt-[180px] sm:w-full sm:max-w-[115ch] sm:flex sm:items-center sm:justify-center relative overflow-hidden'>
          {<Globe className='globe-mobile' />}
        </div>

        {/* INTRODUCTION SECTION */}
        <div className='lg:mx-16 2xl:mx-[200px]'>
          <Introduction />
        </div>

        {/* COLLECTION INFO WITH PROGRESS */}
        <div className='max-w-[70ch] px-4 mx-auto text-center sm:pt-[160px]'>
          <h1 className='font-semibold text-primary mt-6 px-4 text-[32px] md:text-[40px] leading-none max-w-[50ch] lg:whitespace-pre-wrap'>
            {Texts.headline}
          </h1>
          <p className='text-base mt-6 mb-8'>{Texts.sub}</p>{' '}
          <Link href={routes.openSea} passHref>
            <a target='_blank'>
              <Button>{Texts.explore}</Button>
            </a>
          </Link>
          <ProgressBar
            minted={collection?.stats?.total_sales || defaultMintedValue}
            total={collection?.stats?.count || baseTotalValue}
          />
        </div>

        {/* CAROUSEL */}
        <div className='lg:mx-16 2xl:mx-[220px] sm:pb-[160px]'>
          <Carousel data={assets} />
          <CollectionInfo />
        </div>

        {/* FAQ */}
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
              />
              <div className='mx-auto px-4 max-w-[60ch] text-center'>
                <h2 className='font-bold mt-4 px-4 mx-auto text-[32px] md:text-[40px]'>{Texts.bottomTitle}</h2>
                <p className='text-base mt-4 mb-6'>{Texts.bottomText}</p>
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
