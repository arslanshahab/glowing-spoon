import { Texts } from '../constants/texts'

const ProgressBar = ({ minted, total }) => {
  return (
    <div className='w-full sm:w-11/12 mx-auto'>
      <div className='flex text-base justify-between mt-8'>
        <span className='font-bold'>{Texts.minted}</span>
        <span className='font-bold'>{total}</span>
      </div>
      <div className='w-full bg-black my-4 bg-opacity-5 rounded-full h-2.5 '>
        <div className='bg-fern h-2.5 rounded-full' style={{ width: minted / 10 }}></div>
      </div>
      <p className='text-base text-left '>{minted / 10} % claimed</p>
    </div>
  )
}

export default ProgressBar
