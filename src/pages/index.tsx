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
import axios from 'axios'

const Home: NextPage = () => {
  const [collection, setCollection] = useState<any>()

  useEffect(() => {
    axios
      .get('collection/forestcongo', {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
        },
      })
      .then(res => {
        const data = res.data.collection
        const { editors, ...rest } = data
        // remove editors from collection
        setCollection(rest)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Forest.io</title>
        <meta name='description' content={Texts.headline} />
      </Head>
      <div className='relative w-screen bg-image bg-white '>
        <Header />
        <div className='my-14 px-4 mx-auto max-w-[70ch] text-center'>
          <Image src='/assets/imgs/tree.png' width={80} height={80} alt='Tree' />
          <h1 className='font-bold text-black mt-6 px-4 text-[32px] md:text-[40px] max-w-[50ch] lg:whitespace-pre-wrap'>
            {collection?.description || Texts.headline}
          </h1>
          <p className='text-base mt-6 mb-8'>{Texts.sub}</p>
          <Link href={routes.openSea} passHref>
            <a target='_blank'>
              <Button reverse>{Texts.explore}</Button>
            </a>
          </Link>
          <ProgressBar
            minted={collection?.stats?.num_owners || defaultMintedValue}
            total={collection?.dev_seller_fee_basis_points || baseTotalValue}
          />
        </div>
        <div className='lg:mx-16 2xl:mx-[220px]'>
          <Carousel />
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
