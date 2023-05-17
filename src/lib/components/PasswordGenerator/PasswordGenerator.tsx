//Librairies
import { useState } from 'react'

//Components
import { Checkbox } from '#/Checkbox'
import { Slider } from '#/Slider'
import { Button } from '#/Button'

export const PasswordGenerator = () => {
  const copyClipboard = () => {
    navigator.clipboard.writeText(generatedPassword)
  }

  return (
    <div className='rounded-md w-6/12 bg-slate-200/20 backdrop-blur-sm p-5'>
      <div className='w-full bg-gray-300 rounded-md px-3 py-4 mb-4 text-sm h-12'></div>
      <div className='flex w-full items-start justify-between gap-6 mb-4'>
        <div className='w-2/4 grid grid-cols-2 gap-3'>
          <Checkbox label={`Uppercase`} />
          <Checkbox label={`Lowercase`} />
          <Checkbox label={`Numbers`} />
          <Checkbox label={`Symbols`} />
        </div>
        <div className='w-2/4 flex flex-col items-start'>
          <span className='uppercase mb-6 text-sm'>Password Length</span>
          <Slider />
        </div>
      </div>
      <Button
        onClick={copyClipboard}
        text={`Copy the password`}
        style={{ marginBottom: '1rem' }}
      />
      <Button text={`Regenerate password`} />
    </div>
  )
}
