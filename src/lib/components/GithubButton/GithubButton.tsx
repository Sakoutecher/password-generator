//Icon
import GitHubLogo from '~/github-mark.svg'

export const GithubButton = () => {
  return (
    <span className='text-md absolute top-5 left-6 flex items-center justify-center gap-3'>
      Star the project on{' '}
      <a
        href='https://github.com/Sakoutecher/password-generator'
        target='_blank'
        rel='noreferrer'
        className='py-3 px-4 bg-blue-400 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-400 transition ease-linear'
      >
        <img className='w-6' src={GitHubLogo} />
        Github
      </a>
    </span>
  )
}
