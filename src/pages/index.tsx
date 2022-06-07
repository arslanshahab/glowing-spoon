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
        <Header onFaqPress={handleFaqPress} />
        <div className='mt-14 xs:mt-0 px-4 mx-auto max-w-[115ch] text-center'>
          <Image src='/assets/imgs/hero.png' width={100} height={120} alt='Tree' />
          <h1 className='font-semibold text-black mt-6 px-4 text-[40px] md:text-[56px] leading-none lg:whitespace-pre-wrap'>
            {Texts.title}
          </h1>
          <p className='leading-tight font-normal mt-6 mb-6 text-[32px] md:text-[40px]'>{Texts.subtitle}</p>
          <Button reverse>{Texts.learnMore}</Button>
        </div>
        <div className='mx-auto w-full flex items-center justify-center'>{Globe}</div>
        <div className='max-w-[70ch] px-4 mx-auto text-center'>
          <h1 className='font-bold text-black mt-6 px-4 text-[32px] md:text-[40px] leading-none max-w-[50ch] lg:whitespace-pre-wrap'>
            {Texts.headline}
          </h1>
          <p className='text-base mt-6 mb-8'>{Texts.sub}</p>{' '}
          <Link href={routes.openSea} passHref>
            <a target='_blank'>
              <Button reverse>{Texts.explore}</Button>
            </a>
          </Link>
          <ProgressBar
            minted={collection?.stats?.total_sales || defaultMintedValue}
            total={collection?.stats?.count || baseTotalValue}
          />
        </div>
        <div className='lg:mx-16 2xl:mx-[220px]'>
          <Carousel data={assets} />
          <CollectionInfo />
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
