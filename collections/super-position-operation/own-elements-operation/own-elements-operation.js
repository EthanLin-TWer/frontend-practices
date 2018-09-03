import { chooseEven } from '../../filter/filter'
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
  return collection.filter((element, i) => i % 2 === 0).includes(element)
}

export const singleElement = (collection) => {
  return collection
    .filter((element, i) => i % 2 !== 0)
    .filter((element, index, all) => {
      return all.filter((ones) => ones === element).length <= 1
    })
}

export const evenAscOddDesc = (collection) => {
  const evens = chooseEven(collection)
  return evens
}

export const oneAddNextMultiplyThree = (collection) => {
  return collection
}

export const rankByTwoLargeOneSmall = (collection) => {
  return collection
}
