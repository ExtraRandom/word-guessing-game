import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE_SHARE } from '../constants/strings'
import {isMobile} from 'react-device-detect';

export const shareStatus = (guesses: string[], lost: boolean) => {
  var copy_text = `${GAME_TITLE_SHARE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n\n` + generateEmojiGrid(guesses)
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

  if (isMobile) {  // Open share ui on mobile or copy to clipboard on pc
    var share_data = {title: `${GAME_TITLE_SHARE} ${solutionIndex}`, text: copy_text}
    navigator.share(share_data)
  }
  else
  {
    navigator.clipboard.writeText(copy_text)
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
