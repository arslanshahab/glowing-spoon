import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Arrow } from '../constants/svgs'
import { Texts } from '../constants/texts'
import { routes } from '../constants/routes'
import { Asset } from '../models/Asset'
import FsLightbox from 'fslightbox-react'
import Button from './Button'
import { useRouter } from 'next/router'

interface IProps {
  data: Asset[]
}

const Carousel = ({ data }: IProps) => {
  const maxScrollWidth = useRef(0)
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    if (data) {
      maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0
    }
  }, [data])

  let isDown = false
  let startX = 0
  let scrollLeft = 0

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // It will get element which contain id list-container
      // And all the below logic implement to scroll by dragging
      const slider: any = document.querySelector('.carousel-container')
      if (!slider) return
      // This event call when mouse button clicked and active the slider
      slider.addEventListener('mousedown', (e: any) => {
        isDown = true
        slider.classList.add('active')
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
      })

      // This event call when mouse pointer left the slider and inactive the slider
      slider.addEventListener('mouseleave', () => {
        isDown = false
        slider.classList.remove('active')
      })

      // This event call when mouse button relieved and inactive the slider
      slider.addEventListener('mouseup', () => {
        isDown = false
        slider.classList.remove('active')
      })

      // This event call when mouse start dragging the slider
      slider.addEventListener('mousemove', (e: any) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = (x - startX) * 3 // scroll-fast
        slider.scrollLeft = scrollLeft - walk
      })
    }
  }, [typeof window])

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  const moveNext = () => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex(prevState => prevState + 1)
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

  const renderExploreCollectionItem = () => {
    return (
      <div
        draggable={false}
        key={data?.length}
        className='rounded-xl carousel-item text-center relative w-[176px] h-[176px] snap-start cursor-pointer transition-opacity hover:opacity-80'>
        <a
          target='_blank'
          href={routes.openSea}
          rel='noopener noreferrer'
          className='w-[176px] h-[176px] bg-gin text-primary hover:bg-primary hover:text-white flex justify-center items-center rounded-xl text-sm font-semibold'>
          <span>{Texts.exploreOnOpenSea}</span>
        </a>
      </div>
    )
  }

  const lightboxToggler = (slideIndex: number) => {
    setShowLightbox(!showLightbox)
    setCurrentIndex(slideIndex)
    window.onscroll = function () {
      window.scrollTo(window.scrollX, window.scrollY)
    }
  }

  return (
    <div className='carousel my-12 py-4 overflow-x-hidden overflow-y-hidden px-6 lg:px-10'>
      <h2 className='text-base font-bold mb-6 uppercase text-primary'>{Texts.preview}</h2>
      <div className='relative overflow-visible'>
        <div className='justify-between items-center absolute top left w-full h-full hidden sm:flex'>
          <button
            onClick={movePrev}
            className={`absolute -left-4 2xl:-left-8 w-12 h-12 flex items-center justify-center rounded-full shadow-md  bg-white disabled:opacity-25 disabled:cursor-not-allowed z-20 p-0 m-0 transition-all ease-in-out duration-300 ${
              isDisabled('prev') && 'hidden'
            }`}
            disabled={isDisabled('prev')}>
            <span className='transform rotate-180'>{Arrow}</span>
            <span className='sr-only'>Prev</span>
          </button>
          <button
            onClick={moveNext}
            disabled={isDisabled('next')}
            className={`absolute -right-4 2xl:-right-8 w-12 h-12 flex items-center justify-center rounded-full shadow-md bg-white disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 ${
              isDisabled('next') && 'hidden'
            }`}>
            {Arrow}
            <span className='sr-only'>Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className='carousel-container relative flex gap-4 md:gap-8 xs:overflow-x xs:overflow-y-hidden sm:overflow-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory touch-pan-x z-0 touch-auto'>
          {data?.map((resource, index) => {
            return (
              <div
                draggable={false}
                key={index}
                className='rounded-xl carousel-item text-center relative w-[176px] h-[176px] snap-start cursor-pointer transition-opacity hover:opacity-80'>
                <a href='#' rel='noopener noreferrer' onClick={() => lightboxToggler(index)}>
                  <Image
                    draggable={false}
                    src={resource.thumbnail}
                    width={176}
                    height={176}
                    layout='fixed'
                    alt={resource.name}
                    className='rounded-xl'
                    priority
                    placeholder='blur'
                  />
                </a>
              </div>
            )
          })}
          {renderExploreCollectionItem()}
        </div>
      </div>
      <FsLightbox
        toggler={showLightbox}
        sourceIndex={currentIndex}
        sources={data?.map((resource, index) => {
          return (
            <div
              draggable={false}
              key={index}
              className='rounded-xl carousel-item text-center relative w-[400px] h-[400px] snap-start transition-opacity px-2 xs:w-full xs:h-full sm:overflow-visible'>
              <Image
                draggable={false}
                src={resource.thumbnail}
                width={400}
                height={400}
                layout='fixed'
                objectFit='cover'
                alt={resource.name}
                className='rounded-xl block'
                priority
                placeholder='blur'
              />
              <small className='text-white opacity-60 block'>{Texts.forestIOCollection}</small>
              <span className='text-white font-semibold text-lg block my-2'>{resource.name}</span>
              <a href={resource.permalink} target={'_blank'} rel={'noreferrer'}>
                <Button classes='w-auto xs:py-1.5'>{Texts.buyOnOpenSea}</Button>
              </a>
            </div>
          )
        })}
      />
    </div>
  )
}

export default Carousel
