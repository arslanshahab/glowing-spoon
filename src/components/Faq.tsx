import { useState } from 'react'
import Link from 'next/link'
import { routes } from '../constants/routes'
import { Plus } from '../constants/svgs'
import { Texts } from '../constants/texts'

export const data = [
  {
    q: 'Lorem ipsum dolor sit ame',
    a: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus veritatis quasi dicta quiacorrupti beatae ullam, excepturi, dolore iusto at rerum minus in impedit nulla a est, expedita cumque.',
  },
  {
    q: 'Lorem ipsum dolor sit ame',
    a: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus veritatis quasi dicta quiacorrupti beatae ullam, excepturi, dolore iusto at rerum minus in impedit nulla a est, expedita cumque.',
  },

  {
    q: 'Lorem ipsum dolor sit ame',
    a: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus veritatis quasi dicta quiacorrupti beatae ullam, excepturi, dolore iusto at rerum minus in impedit nulla a est, expedita cumque.',
  },

  {
    q: 'Lorem ipsum dolor sit ame',
    a: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus veritatis quasi dicta quiacorrupti beatae ullam, excepturi, dolore iusto at rerum minus in impedit nulla a est, expedita cumque.',
  },
]

export const Question = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='border-b border-mercury pb-6'>
      <div
        className='w-full flex justify-between items-center mt-6 cursor-pointer'
        onClick={() => setExpanded(!expanded)}>
        <h3 className='text-base font-bold'>{question}</h3>
        <div
          className={`w-8 h-8 bg-black bg-opacity-5 flex items-center justify-center rounded-full transition-transform transform ${
            expanded ? 'rotate-45' : 'rotate-0'
          }`}>
          {Plus}
        </div>
      </div>
      {expanded && <p className='text-base mt-6'>{answer}</p>}
    </div>
  )
}

const Faq = () => {
  return (
    <div className='px-4 max-w-[65ch] mx-auto'>
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
