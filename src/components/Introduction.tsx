import { FC } from 'react'
import IntroCard from './IntroCard'
import data from './../constants/data.json'
import { Texts } from '../constants/texts'

export const Introduction: FC = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-8 px-6 lg:px-14 py-20 sm:py-36 bg-gin rounded-none sm:rounded-3xl'>
      <h1 className='font-semibold text-primary mb-8 px-4 text-[32px] md:text-[40px] leading-none max-w-[20ch] lg:whitespace-pre-wrap text-center'>
        {Texts.introTitle}
      </h1>
      <div className='flex flex-row gap-6 flex-wrap sm:flex-nowrap'>
        {data.introData.map((item, index) => (
          <IntroCard key={index} index={++index} title={item.title} image={item.image} description={item.description} />
        ))}
      </div>
    </div>
  )
}
