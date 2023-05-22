//Librairies
import { motion } from 'framer-motion'

//Hooks
import { useToasterStore } from '../../hooks/useToaster/'

export const Toaster = () => {
  const active = useToasterStore((state) => state.active)

  const variants = {
    open: { opacity: 1, y: '-4rem', x: '-50%' },
    closed: { opacity: 0, y: '4rem', x: '-50%' },
  }

  return (
    <motion.div
      variants={variants}
      animate={active ? 'open' : 'closed'}
      transition={{
        ease: 'easeOut',
        duration: 0.5,
        x: { duration: 1 },
      }}
      className='w-2/5 absolute -bottom-6 left-1/2 translate-x-1/2 flex items-center justify-center bg-blue-300/25 py-4 rounded border-2 border-blue-400 backdrop-blur-sm'
    >
      <span className='uppercase'>
        The password has been copied to the clipboard
      </span>
    </motion.div>
  )
}
