//Components
import { PasswordGenerator } from '#/PasswordGenerator'

const App = () => {
  return (
    <div
      style={{ backgroundImage: 'url(gggrain.svg)' }}
      className='w-screen h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center font-jetbrains'
    >
      <PasswordGenerator />
    </div>
  )
}

export default App
