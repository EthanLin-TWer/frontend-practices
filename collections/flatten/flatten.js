import { chooseNoRepeatNumber } from '../filter/filter'

export const twoDimensionalArrayToOne = (collection) => {
  return collection.reduce((result, element) => result.concat(element), [])
}

export const twoDimensionalArrayToOneSorted = (collection) => {
  return chooseNoRepeatNumber(twoDimensionalArrayToOne(collection))
}
