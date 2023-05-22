//Components
import { PasswordGenerator } from '#/PasswordGenerator'
import { Toaster } from '#/Toaster'

const App = () => {
  return (
    <div
      style={{ backgroundImage: 'url(gggrain.svg)' }}
      className='w-screen h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center font-jetbrains relative'
    >
      <PasswordGenerator />
      <Toaster />
    </div>
  )
}

export default App
