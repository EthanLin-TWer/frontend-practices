import { words } from '../../util-words'

export const evenToLetter = (collection) => {
  return collection
    .filter((element) => element % 2 === 0)
    .map((number) => words[number - 1])
}

export const averageToLetter = (collection) => {
  return words[
    Math.round(
      collection.reduce((total, number) => total + number, 0) /
        collection.length
    ) - 1
  ]
}

export const multipleAndComputeSum = (collection) => {
  return collection
}

export const multipleOddAndAdd = (collection) => {
  return collection
}

export const multipleOddAndComputeSum = (collection) => {
  return collection
}
