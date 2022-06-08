import Image from 'next/image'

interface IProps {
  title: string
  image: string
  description: string
  index?: number
}

export const IntroCard = (props: IProps) => {
  return (
    <div className='w-full sm:w-1/3'>
      <h4 className='flex gap-1 font-medium mb-4 text-center justify-center'>
        <span className='border-2 rounded-full border-solid border-primary w-[24px] h-[24px] flex items-center justify-center'>{props.index}</span>
        {props.title}
      </h4>
      <Image src={props.image} alt='intro-card-1' width={388} height={348} layout='responsive' objectFit='cover' />
      <p className='mt-4'>{props.description}</p>
    </div>
  )
}
export default IntroCard
