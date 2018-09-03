import { words } from '../../utils'

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
    .map((number) => number * 3 + 2)
    .reduce((total, number) => total + number, 0)
}

export const multipleOddAndAdd = (collection) => {
  return collection
    .filter((number) => number % 2 !== 0)
    .map((number) => number * 3 + 2)
}

export const multipleOddAndComputeSum = (collection) => {
  return collection
    .filter((number) => number % 2 !== 0)
    .map((number) => number * 3 + 5)
    .reduce((total, number) => total + number, 0)
}
