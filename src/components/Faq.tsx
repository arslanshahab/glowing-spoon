import { useState } from 'react'
import Link from 'next/link'
import { routes } from '../constants/routes'
import { Texts } from '../constants/texts'
import { data } from '../constants/faq.json'

export const Question = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='border-b border-mercury pb-6'>
      <div
        className='w-full flex justify-between items-center mt-6 cursor-pointer'
        onClick={() => setExpanded(!expanded)}>
        <div className='question text-base font-bold' dangerouslySetInnerHTML={{ __html: question }}></div>
        <div
          className={`relative shrink-0 w-8 h-8 bg-black bg-opacity-5 flex items-center justify-center rounded-full transition-transform transform origin-center ${
            expanded ? '-rotate-45' : 'rotate-0'
          }`}>
          <span className='w-2 h-0.5 bg-black bg-opacity-50'></span>
          <span className='absolute w-2 h-0.5 bg-black rotate-90 bg-opacity-50'></span>
        </div>
      </div>
      {expanded && <div className='question text-base mt-6' dangerouslySetInnerHTML={{ __html: answer }}></div>}
    </div>
  )
}

const Faq = () => {
  return (
    <div className='px-4 max-w-[65ch] mx-auto' id="faq-section">
      <h2 className='text-2xl text-center font-bold'>{Texts.questions}</h2>
      {data.map((item, index) => (
        <Question key={index} question={item.q} answer={item.a} />
      ))}
      <p className='my-6'>
        {Texts.moreQuestions}
        <Link href={routes.home}>
          <a className='text-primary'>{Texts.contact}</a>
        </Link>
      </p>
    </div>
  )
}

export default Faq
