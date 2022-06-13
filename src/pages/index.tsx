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
import Footer from '../components/Footer'

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

  const handleLearnMorePress = () => {
    const section = document.querySelector('#introduction-section')
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
        <div className='xs:pt-[40px] sm:mt-[80px] px-4 mx-auto max-w-[115ch] text-center'>
          <h1 className='font-semibold text-black mt-6 px-4 text-[40px] md:text-[56px] leading-tight lg:whitespace-pre-wrap'>
            {Texts.title}
          </h1>
          <p className='leading-snug sm:leading-tight font-normal mt-6 mb-6 text-[24px] md:text-[40px]'>
            {Texts.subtitle}
          </p>
          <Button reverse classes='my-4 xs:w-auto' onClick={() => handleLearnMorePress()}>
            {Texts.learnMore}
          </Button>
        </div>

        {/* MAP IMAGE */}
        <div className='sm:mx-auto md:mt-[80px] sm:w-full sm:max-w-[115ch] sm:flex sm:items-center sm:justify-center relative overflow-hidden'>
          {<Globe className='globe-mobile' />}
        </div>

        {/* INTRODUCTION SECTION */}
        <div className='lg:mx-16 2xl:mx-[200px]'>
          <Introduction />
        </div>

        {/* COLLECTION INFO WITH PROGRESS */}
        <div className='max-w-[70ch] px-4 mx-auto text-center sm:pt-[80px]'>
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
        <div className='lg:mx-16 2xl:mx-[220px] sm:pb-[80px]'>
          <Carousel data={assets} />
          <CollectionInfo />
        </div>

        {/* FAQ */}
        <Faq />

        <div className='lg:mx-16 2xl:mx-[200px] mt-32'>
          <div className='bg-gradient-to-b from-chateauGreen to-chateauGreen bg-opacity-50 mix-blend-darken sm:rounded-3xl py-20 sm:py-28'>
            <div className='w-full lg:w-9/12 xl:w-3/4 mx-auto flex flex-col justify-center px-4 my-8'>
              <h2 className='font-semibold px-4 mx-auto text-[32px] md:text-[40px] text-center mb-8'>
                {Texts.bottomTitle}
              </h2>
              <Image
                src='/assets/imgs/mapimgwithoutbg.png'
                width={1006}
                height={529}
                layout='intrinsic'
                alt='Green world map'
                className='mix-blend-multiply'
              />
              <div className='mx-auto px-4 max-w-[80ch] text-center'>
                <p className='text-2xl mt-4 mb-6 opacity-80' dangerouslySetInnerHTML={{ __html: Texts.bottomText }}></p>
                <div className='flex justify-center gap-4 flex-wrap sm:flex-nowrap'>
                  <Link href={routes.openSea} passHref>
                    <a target={'_blank'}>
                      <Button reverse>{Texts.buyNFTOnOpenSea}</Button>
                    </a>
                  </Link>
                  <Link href={routes.discord} passHref>
                    <a target={'_blank'}>
                      <Button reverse>{Texts.community}</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className='lg:mx-16 2xl:mx-[220px] py-8'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
