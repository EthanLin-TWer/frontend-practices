import { sortAscendingly } from '../map/map'

export const collectMaxNumber = (collection) => {
  return collection.reduce((result, element) => {
    return result && result > element ? result : element
  }, null)
}

export const collectMinNumber = (collection) => {
  return collection.reduce((result, element) => {
    return result && result < element ? result : element
  }, null)
}

export const compareCollections = (collection_a, collection_b) => {
  return collection_a.every((element, i) => collection_b[i] === element)
}

export const computeAverage = (collection) => {
  return (
    collection.reduce((total, number) => total + number, 0) / collection.length
  )
}

export const computeChainMedian = (collection) => {
  const sorted = sortAscendingly(collection.split('->').map(Number))
  if (sorted.length % 2 === 0) {
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
  }
  return sorted[(sorted.length - 1) / 2]
}

export const computeMedian = (collection) => {
  const sorted = sortAscendingly(collection)
  if (sorted.length % 2 === 0) {
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
  }
  return sorted[(sorted.length - 1) / 2]
}

export const computeSum = (collection) => {
  return [collection]
}

export const calculateFirstSubscription = (collection, element) => {
  return [collection, element]
}

export const calculateLastSubscription = (collection, element) => {
  return [collection, element]
}

export const findFirstEven = (collection) => {
  return [collection]
}

export const findLastEven = (collection) => {
  return [collection]
}

export const splitToZero = (number, internal) => {
  return [number, internal]
}
