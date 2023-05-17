import { FC } from 'react'

type ButtonProps = {
  text: string
  style?: object
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ text, style, onClick }) => {
  return (
    <button
      style={style}
      className='uppercase w-full bg-blue-300 py-2 rounded text-sm hover:bg-blue-400'
      onClick={onClick}
    >
      {text}
    </button>
  )
}
