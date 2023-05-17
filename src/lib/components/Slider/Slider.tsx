//Librairies
import { useState } from 'react'

export const Slider = () => {
  const [value, setValue] = useState<number>(1)

  return (
    <>
      <input
        type='range'
        className='transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-gray-300'
        id='customRange1'
        min={0}
        max={10}
        step={1}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </>
  )
}
