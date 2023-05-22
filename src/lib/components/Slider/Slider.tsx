//Hooks
import { useSliderStore } from '../../hooks/useSlider'

export const Slider = () => {
  const value = useSliderStore((state) => state.value)
  const updateValue = useSliderStore((state) => state.setValue)

  return (
    <>
      <input
        type='range'
        className='transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-gray-300'
        id='customRange1'
        min={1}
        max={60}
        step={1}
        value={value}
        onChange={(e) => updateValue(Number(e.target.value))}
      />
    </>
  )
}
