import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source wordle clone for Soup:{' '} <br></br>
        <a href="https://github.com/ExtraRandom/word-guessing-game" className="underline font-bold">
          Check out the code here
        </a>{' '}<br />
        Or{' '}<br />
        <a href="https://github.com/cwackerfuss/word-guessing-game" className="underline font-bold">
          Check out the original project here
        </a>.{' '}
      </p>
    </BaseModal>
  )
}
