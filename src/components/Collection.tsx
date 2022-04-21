import Image from 'next/image'
import { Texts } from '../constants/texts'
import { Square } from '../constants/svgs'

export const LightText = ({ children }) => {
  return <p className='text-sm opacity-60'>{children}</p>
}

export const BoldText = ({ children }) => {
  return <strong className='text-sm block'>{children}</strong>
}

const CollectionInfo = () => {
  return (
    <div className='mb-8 pb-4 px-6 lg:px-10'>
      <h2 className='hidden md:block text-2xl font-bold mb-6'>{Texts.info}</h2>
      <div className='grid md:grid-cols-3 gap-4 lg:gap-8 '>
        <div className='relative rounded-xl p-4 aspect-square flex flex-col justify-between md:justify-end md:bg-everglade text-white'>
          <h2 className='md:hidden text-2xl text-black dark:text-white font-bold mb-6 -ml-4'>{Texts.info}</h2>
          <strong className='text-black -ml-4 md:ml-0 md:text-white text-base md:absolute top-4'>
            {Texts.parametres}
          </strong>
          <div className='-ml-4 md:ml-0 my-4 md:my-2 lg:my-4 text-black md:text-white'>
            <LightText>{Texts.country}</LightText>
            <BoldText>Republic of Congo</BoldText>
          </div>
          <div
            className='text-black -ml-4 md:ml-0 md:text-white group relative my-4 md:my-2 lg:my-4 cursor-pointer'
            onClick={() => navigator.clipboard.writeText(`${Texts.coordinatesValue}`)}>
            <button className='absolute right-0 top-2 cursor-pointer transition-all opacity-80 group-hover:opacity-100 group-active:opacity-100 group-active:scale-110'>
              <svg width='24' height='28' viewBox='0 0 24 34' xmlns='http://www.w3.org/2000/svg'>
                <feBlend mode='difference' in='BackgroundImage' in2='SourceGraphic' />
                <rect
                  className='fill-dovegray  md:fill-alto'
                  width='14'
                  height='16'
                  rx='1'
                  x='5'
                  y='5'
                  fillOpacity='1'
                />
                <rect
                  className='fill-dovegray md:fill-alto  stroke-white dark:stroke-gray-800 md:stroke-everglade md:dark:stroke-everglade'
                  width='14'
                  height='16'
                  rx='1'
                  fillOpacity='1'
                  strokeWidth='2'
                />
              </svg>
            </button>
            <LightText>{Texts.coordinates}</LightText>
            <BoldText>{Texts.coordinatesValue}</BoldText>
          </div>
          <div className='-ml-4 md:ml-0 mt-4 md:mt-2 lg:mt-4 text-black md:text-white'>
            <LightText>{Texts.area}</LightText>
            <BoldText>1614.16 km2</BoldText>
            <BoldText>398867.54 acres</BoldText>
          </div>
        </div>
        <div className='relative rounded-xl p-4 aspect-square flex flex-col text-white '>
          <Image
            src='/assets/imgs/bgimg.jpg'
            layout='fill'
            objectFit='cover'
            objectPosition='100%'
            alt='View from space'
            className='rounded-xl'
            priority
            draggable={false}
          />
          <strong className='z-10'>{Texts.space}</strong>
          <div className='absolute top-1/2 left-1/2 w-40 h-40 md:h-20 md:w-20 xl:h-40 xl:w-40 border border-white bg-white bg-opacity-10 transfrom -translate-x-1/2 -translate-y-1/2 '></div>
        </div>
        <div className='relative rounded-xl p-4 aspect-square flex flex-col bg-goblin text-white overflow-hidden'>
          <div className='absolute right-[20%] bottom-0 top-[20%] md:top-[30%] xl:top-[20%] h-[100%] w-[100%]'>
            {Square}
          </div>
          <div className='flex md:flex-col xl:flex-row justify-between items-start xl:items-center'>
            <strong>{Texts.collection}</strong>
            <BoldText>1 ◻ = 1.6142 km2 </BoldText>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CollectionInfo
