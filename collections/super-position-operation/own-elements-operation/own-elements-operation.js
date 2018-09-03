import { computeAverage } from '../../reduce/reduce'

export const calculateAverage = (collection) => {
  return computeAverage(collection.filter((number) => number % 2 === 0))
}

export const calculateMedian = (collection) => {
  return collection
}

export const evenGroupCalculateAverage = (collection) => {
  return collection
}

export const isExistElement = (collection, element) => {
  return [collection, element]
}

export const singleElement = (collection) => {
  return collection
}

export const evenAscOddDesc = (collection) => {
  return collection
}

export const oneAddNextMultiplyThree = (collection) => {
  return collection
}

export const rankByTwoLargeOneSmall = (collection) => {
  return collection
}
