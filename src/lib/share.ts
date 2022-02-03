import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'
import {isMobile} from 'react-device-detect';

export const shareStatus = (guesses: string[], lost: boolean) => {
  var copy_text = `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n\n` + generateEmojiGrid(guesses)
  // var share_data = {text: copy_text}
  // navigator.share(share_data)
  /*
  navigator.clipboard.writeText(copy_text)
  .then(() => {
    console.log("copied")
  })
  .catch(() => {
    console.log("not copied")
  })
  */

  if (isMobile) {
    var share_data = {title: `${GAME_TITLE} ${solutionIndex}`, text: copy_text}
    navigator.share(share_data)
  }
  else
  {
    navigator.clipboard.writeText(copy_text)
    .then(() => {
      console.log("copied")
    })
    .catch(() => {
      console.log("not copied")
    })
  }

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
