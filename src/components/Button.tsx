import { ReactNode, FC } from 'react'

type IProps = {
  children: ReactNode
  reverse?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: FC<IProps> = ({ children, reverse, onClick }) => {
  return (
    <button
      className={`w-full sm:w-auto rounded-full text-center text-sm font-bold align-middle py-2.5 px-4 transition-colors duration-300 ${
        reverse
          ? 'bg-gin text-primary hover:bg-primary hover:text-gin'
          : 'bg-chateauGreen text-primary hover:bg-primary hover:text-chateauGreen'
      }`}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
