import { useState, useRef } from 'react'
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
  const coordinates = '3,317, 17.933'

  return (
    <div className='my-12 py-4  px-6 lg:px-10'>
      <h2 className='text-2xl font-bold mb-6'>{Texts.info}</h2>
      <div className='flex gap-4 lg:gap-8 '>
        <div className='relative rounded-xl p-4 flex-1 aspect-square flex flex-col justify-end bg-everglade text-white'>
          <strong className='text-base absolute top-4'>{Texts.parametres}</strong>
          <div className='my-4'>
            <LightText>{Texts.country}</LightText>
            <BoldText>Republic of Congo</BoldText>
          </div>
          <div
            className='group relative my-4 cursor-pointer'
            onClick={() => navigator.clipboard.writeText(`${coordinates}`)}>
            <button className='absolute right-0 top-2 cursor-pointer transition-all opacity-80 group-hover:opacity-100 group-active:opacity-100 group-active:scale-110'>
              {Copy}
            </button>
            <LightText>{Texts.coordinates}</LightText>
            <BoldText>{coordinates}</BoldText>
          </div>
          <div className='mt-4'>
            <LightText>{Texts.area}</LightText>
            <BoldText>1614.16 km2</BoldText>
            <BoldText>398867.54 acres</BoldText>
          </div>
        </div>
        <div className='relative rounded-xl p-4 flex-1 flex flex-col text-white '>
          <Image src='/assets/svgs/bgimg.svg' layout='fill' />
          <strong className='z-10'>{Texts.space}</strong>
        </div>
        <div className='relative rounded-xl p-4 flex-1 flex flex-col bg-goblin  text-white overflow-hidden'>
          <div className='absolute -left-4 -bottom-4'>{Square}</div>
          <div className='flex justify-between items-center'>
            <strong>{Texts.collection}</strong>
            <BoldText>1 ◻ = 1.6142 km2 </BoldText>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CollectionInfo
