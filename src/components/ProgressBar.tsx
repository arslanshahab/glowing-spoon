import { useState } from 'react'
import { Texts } from '../constants/texts'

const ProgressBar = () => {
  const [claimed, setClaimed] = useState(9)
  return (
    <div className='w-full sm:w-11/12 mx-auto'>
      <div className='flex text-base justify-between mt-8'>
        <span className='font-bold'>{Texts.minted}</span>
        <span className='font-bold'>1000</span>
      </div>
      <div className='w-full bg-black my-4 bg-opacity-5 rounded-full h-2.5 '>
        <div className='bg-fern h-2.5 rounded-full' style={{ width: claimed }}></div>
      </div>
      <p className='text-base text-left '>{claimed} % claimed</p>
    </div>
  )
}

export default ProgressBar
