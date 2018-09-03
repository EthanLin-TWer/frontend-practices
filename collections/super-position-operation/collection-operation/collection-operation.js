import { computeSum } from '../../reduce/reduce'
import { evens, odds, words } from '../../utils'

export const evenToLetter = (collection) => {
  return collection.filter(evens).map((number) => words[number - 1])
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
  return computeSum(collection.map((number) => number * 3 + 2))
}

export const multipleOddAndAdd = (collection) => {
  return collection.filter(odds).map((number) => number * 3 + 2)
}

export const multipleOddAndComputeSum = (collection) => {
  return computeSum(collection.filter(odds).map((number) => number * 3 + 5))
}
