import Link from 'next/link'
import { routes } from '../constants/routes'
import { CloseIcon, Logo } from '../constants/svgs'
import { Texts } from '../constants/texts'
import Button from './Button'

interface IProps {
  onFaqPress?: () => void
  onDrawerClose?: () => void
}

const DrawerMenu = ({ onFaqPress, onDrawerClose }: IProps) => {
  return (
    <div className='px-4 lg:px-24 2xl:px-[240px] py-4 pt-6 w-full flex flex-col text-lg absolute z-50 h-screen bg-gin overflow-hidden overscroll-none'>
      <div className='h-max flex items-center justify-between w-full'>
        <div className='font-semibold'>
          <Link href={routes.home}>
            <a className='flex items-center'>
              <Logo />
              <span className='inline-block ml-1 text-primary'>Forest.io</span>
            </a>
          </Link>
        </div>
        <a className='cursor-pointer'>
          <span className='text-black font-semibold text-sm'>
            <CloseIcon onClick={onDrawerClose} />
          </span>
        </a>
      </div>
      <div className='h-full flex flex-col justify-between w-full mt-8'>
        <div className='flex flex-col'>
          <a className='cursor-pointer'>
            <span
              className='text-black font-semibold text-3xl inline-block mb-8'
              onClick={() => {
                onDrawerClose?.()
                onFaqPress?.()
              }}>
              {Texts.faq}
            </span>
          </a>
          <Link href={routes.openSea} passHref>
            <a target='_blank'>
              <span className='text-black font-semibold text-3xl inline-block mb-4'>{Texts.openSea}</span>
            </a>
          </Link>
        </div>
        <div className='px-4 max-w-[60ch] text-center'>
          <Link href={routes.discord} passHref>
            <a target='_blank'>
              <Button>{Texts.discord}</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DrawerMenu
