import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'

export const shareStatus = (guesses: string[], lost: boolean) => {
  var copy_text = `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n\n` + generateEmojiGrid(guesses)

  navigator.clipboard.writeText(copy_text)
  .then(() => {
    console.log("copied")
  })
  .catch(() => {
    console.log("not copied")
  })
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬛'
          }
        })
        .join('')
    })
    .join('\n')
}
