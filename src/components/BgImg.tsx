import Image from 'next/image'

const BgImg = () => {
  return (
    <>
      <div className='absolute hidden  w-screen lg:fixed sm:block sm:-left-[10%] sm:-top-[30%] '>
        <Image
          src='/assets/svgs/ellipse1.svg'
          width={1427}
          height={955}
          layout='intrinsic'
          objectFit='cover'
          className='absolute left-0'
          alt='background image'
        />
      </div>
      <div className='hidden absolute lg:fixed sm:block w-full md:-right-[30%] lg:-right-[60%] -top-[30%] z-10'>
        <Image
          src='/assets/svgs/ellipse2.svg'
          width={893}
          height={893}
          layout='intrinsic'
          objectFit='cover'
          className='absolute left-0'
          alt='background image'
        />
      </div>
      <div className='absolute sm:hidden left-0 -top-[10%] '>
        <Image
          src='/assets/svgs/ellipse3.svg'
          width={640}
          height={640}
          className='absolute'
          objectFit='cover'
          objectPosition='center center'
          alt='background image'
        />
      </div>
    </>
  )
}

export default BgImg
