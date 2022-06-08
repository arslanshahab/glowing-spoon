import { useState } from 'react'
import Link from 'next/link'
import { routes } from '../constants/routes'
import { Texts } from '../constants/texts'
import { data } from '../constants/faq.json'

export const Question = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='border-b border-mercury pb-6 px-4'>
      <div
        className='w-full flex justify-between items-center mt-6 cursor-pointer'
        onClick={() => setExpanded(!expanded)}>
        <div className='question text-base font-bold text-primary' dangerouslySetInnerHTML={{ __html: question }}></div>
        <div
          className={`relative shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-transform transform origin-center ${
            expanded ? '-rotate-45' : 'rotate-0'
          }`}>
          <span className='w-2 h-0.5 bg-primary bg-opacity-50'></span>
          <span className='absolute w-2 h-0.5 bg-primary rotate-90 bg-opacity-50'></span>
        </div>
      </div>
      {expanded && <div className='question text-base mt-6 text-primary' dangerouslySetInnerHTML={{ __html: answer }}></div>}
    </div>
  )
}

const Faq = () => {
  return (
    <div className='px-4 max-w-[65ch] mx-auto' id='faq-section'>
      <h2 className='text-base text-center font-bold uppercase'>{Texts.questions}</h2>
      <div className='border border-mercury rounded-md mt-4'>
        {data.map((item, index) => (
          <Question key={index} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  )
}

export default Faq
