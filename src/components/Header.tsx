import Link from 'next/link'
import { routes } from '../constants/routes'
import { Texts } from '../constants/texts'
import Button from './Button'

const Header = () => {
  return (
    <div className='px-4 lg:px-24 2xl:px-[240px] py-4 pt-6 w-full flex flex-row justify-between items-center text-lg'>
      <div className='font-semibold opacity-80'>
        <Link href={routes.home}>
          <a>Forest.io</a>
        </Link>
      </div>
      <Link href={routes.discord} passHref>
        <a target='_blank'>
          <Button>{Texts.discord}</Button>
        </a>
      </Link>
    </div>
  )
}

export default Header
