import Link from 'next/link'
import { useState } from 'react'
import { routes } from '../constants/routes'
import { Hamburger } from '../constants/svgs'
import { Texts } from '../constants/texts'
import Button from './Button'
import DrawerMenu from './DrawerMenu'

interface IProps {
  onFaqPress?: () => void
}

const Header = ({ onFaqPress }: IProps) => {
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <>
      {showDrawer ? (
        <DrawerMenu onDrawerClose={() => setShowDrawer(false)} onFaqPress={onFaqPress} />
      ) : (
        <div className='px-4 lg:px-24 2xl:px-[240px] py-4 pt-6 w-full flex flex-row justify-between items-center text-lg'>
          <div className='font-semibold opacity-80'>
            <Link href={routes.home}>
              <a>Forest.io</a>
            </Link>
          </div>
          <div className='flex flex-row gap-4 items-center xs:hidden sm:flex'>
            <a className='cursor-pointer'>
              <span className='text-black font-semibold text-sm' onClick={onFaqPress}>
                {Texts.faq}
              </span>
            </a>
            <Link href={routes.openSea} passHref>
              <a target='_blank'>
                <span className='text-black font-semibold text-sm'>{Texts.openSea}</span>
              </a>
            </Link>
            <Link href={routes.discord} passHref>
              <a target='_blank'>
                <Button>{Texts.discord}</Button>
              </a>
            </Link>
          </div>
          <div className='flex flex-row gap-4 items-center xs:flex sm:hidden'>
            <Hamburger onClick={() => setShowDrawer(true)} />
          </div>
        </div>
      )}
    </>
  )
}

export default Header
