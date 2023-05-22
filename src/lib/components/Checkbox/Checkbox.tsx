//Librairies
import { FC, useEffect, useState } from 'react'

//Hooks
import { useCheckboxStore } from '../../hooks/useCheckbox'

type CheckboxProps = {
  label: string
}

export const Checkbox: FC<CheckboxProps> = ({ label }) => {
  const checkboxs = useCheckboxStore((state) => state.checkboxs)
  const setCheckboxs = useCheckboxStore((state) => state.setCheckboxs)
  const removeCheckboxs = useCheckboxStore((state) => state.removeCheckboxs)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const checkValueInArray = (value: string, array: string[]): boolean => {
    return array.includes(value)
  }

  const handleClick = () => {
    if (isChecked) {
      if (checkboxs.length === 1) {
        return
      }
      removeCheckboxs(label)
    } else {
      setCheckboxs(label.toUpperCase())
    }
  }

  useEffect(() => {
    setIsChecked(checkValueInArray(label.toUpperCase(), checkboxs))
  }, [checkboxs])

  useEffect(() => {
    setIsChecked(checkValueInArray(label.toUpperCase(), checkboxs))
  })

  return (
    <div className='w-full bg-gray-300 rounded-md py-2 px-3 flex items-center'>
      <div className='flex items-center mr-2'>
        <input
          id={label}
          type='checkbox'
          className='w-4 h-4 rounded'
          checked={isChecked ? true : false}
          onChange={handleClick}
        />
      </div>
      <label htmlFor={label} className='uppercase text-sm'>
        {label}
      </label>
    </div>
  )
}
