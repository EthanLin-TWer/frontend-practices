import { sortAscendingly, sortDescendingly } from '../../map/map'
import { computeAverage } from '../../reduce/reduce'
import { evens, odds } from '../../utils'

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
  return [
    ...sortAscendingly(collection.filter(evens)),
    ...sortDescendingly(collection.filter(odds)),
  ]
}

export const oneAddNextMultiplyThree = (collection) => {
  const results = collection.map((value, index, all) => {
    if (all.length === index + 1) {
      return null
    }
    return (value + all[index + 1]) * 3
  })

  results.pop()
  return results
}

export const rankByTwoLargeOneSmall = (collection) => {
  return collection
}
