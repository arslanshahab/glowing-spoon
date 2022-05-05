import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Arrow } from '../constants/svgs'
import { Texts } from '../constants/texts'
import { maxHeaderSize } from 'http'

const Carousel = ({ data, assetsInfo, getNextRecords }: any) => {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  const moveNext = () => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex(prevState => prevState + 1)
      getNextRecords(assetsInfo.nextCursor)
    }
  }

  const isDisabled = direction => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    if (data) {
      maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0
      console.log(data, maxScrollWidth)
    }
  }, [getNextRecords, assetsInfo, data])

  return (
    <div className='carousel my-12 py-4 overflow-x-hidden overflow-y-hidden px-6 lg:px-10'>
      <h2 className='text-2xl font-bold mb-6'>{Texts.preview}</h2>
      <div className='relative overflow-visible'>
        <div className='flex justify-between items-center absolute top left w-full h-full '>
          <button
            onClick={movePrev}
            className='absolute -left-4 2xl:-left-8 w-12 h-12 flex items-center justify-center rounded-full shadow-md  bg-white disabled:opacity-25 disabled:cursor-not-allowed z-20 p-0 m-0 transition-all ease-in-out duration-300'
            disabled={isDisabled('prev')}>
            <span className='transform rotate-180'>{Arrow}</span>
            <span className='sr-only'>Prev</span>
          </button>
          <button
            onClick={moveNext}
            className='absolute -right-4 2xl:-right-8 w-12 h-12 flex items-center justify-center rounded-full shadow-md bg-white disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300'>
            {Arrow}
            <span className='sr-only'>Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className='carousel-container relative flex gap-4 md:gap-8 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0'>
          {data?.map((resource, index) => {
            return (
              <div
                draggable={false}
                key={index}
                className='rounded-xl carousel-item text-center relative w-[176px] h-[176px] snap-start cursor-pointer transition-opacity hover:opacity-80'>
                <a target='_blank' href={resource.permalink} rel='noopener noreferrer'>
                  <Image
                    draggable={false}
                    src={resource.image_thumbnail_url}
                    width={176}
                    height={176}
                    layout='fixed'
                    alt={resource.name}
                    className='rounded-xl'
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Carousel
