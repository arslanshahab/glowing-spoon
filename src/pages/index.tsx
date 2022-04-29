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

const Home: NextPage = () => {
  const [collection, setCollection] = useState<any>()
  const [assets, setAssets] = useState<any[]>()

  useEffect(() => {
    ;(async () => {
      await getCollectionInfo()
      await getCollectionAssets()
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

  const getCollectionAssets = async () => {
    const response = await http.get('/assets?collection=forestcongo?limit=50', {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '',
      },
    })
    const data = response.data
    const assets = data.assets.map(x => {
      return {
        id: x.id,
        image_url: x.image_url,
        image_thumbnail_url: x.image_thumbnail_url,
        name: x.name,
        permalink: x.permalink,
        next: x.next,
        previous: x.previous,
      }
    })
    setAssets(assets)
  }

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
