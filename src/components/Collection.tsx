import Image from 'next/image'
import { Texts } from '../constants/texts'
import { Copy, Square } from '../constants/svgs'

export const LightText = ({ children }) => {
  return <p className='text-sm opacity-60'>{children}</p>
}

export const BoldText = ({ children }) => {
  return <strong className='text-sm block'>{children}</strong>
}

const CollectionInfo = () => {
  return (
    <div className='mb-8 pb-4 px-6 lg:px-10'>
      <h2 className='text-2xl font-bold mb-6'>{Texts.info}</h2>
      <div className='grid md:grid-cols-3 gap-4 lg:gap-8 '>
        <div className='relative rounded-xl p-4 aspect-square  flex flex-col justify-end bg-everglade text-white'>
          <strong className='text-base absolute top-4'>{Texts.parametres}</strong>
          <div className='my-4 md:my-2 lg:my-4'>
            <LightText>{Texts.country}</LightText>
            <BoldText>Republic of Congo</BoldText>
          </div>
          <div
            className='group relative my-4 md:my-2 lg:my-4 cursor-pointer'
            onClick={() => navigator.clipboard.writeText(`${Texts.coordinatesValue}`)}>
            <button className='absolute right-0 top-2 cursor-pointer transition-all opacity-80 group-hover:opacity-100 group-active:opacity-100 group-active:scale-110'>
              {Copy}
            </button>
            <LightText>{Texts.coordinates}</LightText>
            <BoldText>{Texts.coordinatesValue}</BoldText>
          </div>
          <div className='mt-4 md:mt-2 lg:mt-4'>
            <LightText>{Texts.area}</LightText>
            <BoldText>1614.16 km2</BoldText>
            <BoldText>398867.54 acres</BoldText>
          </div>
        </div>
        <div className='relative rounded-xl p-4 aspect-square flex flex-col text-white '>
          <Image
            src='/assets/imgs/bgimg.png'
            layout='fill'
            objectFit='cover'
            objectPosition='100%'
            alt='View from space'
            className='rounded-xl'
            priority
          />
          <strong className='z-10'>{Texts.space}</strong>
          <div className='absolute top-1/2 left-1/2 w-40 h-40 md:h-20 md:w-20 xl:h-40 xl:w-40 border border-white bg-white bg-opacity-10 transfrom -translate-x-1/2 -translate-y-1/2 '></div>
        </div>
        <div className='relative rounded-xl p-4 aspect-square flex flex-col bg-goblin text-white overflow-hidden'>
          <div className='absolute right-[20%] bottom-0  top-[20%] md:top-[30%] xl:top-[20%] h-[100%] w-[100%]'>
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
