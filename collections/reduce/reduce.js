import { sortAscendingly } from '../map/map'
import { evens } from '../utils'

export const collectMaxNumber = (collection) => {
  return collection.reduce((result, element) => Math.max(result, element))
}

export const collectMinNumber = (collection) => {
  return collection.reduce((result, element) => Math.min(result, element))
}

export const compareCollections = (collection_a, collection_b) => {
  return collection_a.every((element, i) => collection_b[i] === element)
}

export const computeAverage = (collection) => {
  return computeSum(collection) / collection.length
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
  return collection.reduce((sum, element) => sum + element, 0)
}

export const calculateFirstSubscription = (collection, finding) => {
  return collection.indexOf(finding)
}

export const calculateLastSubscription = (collection, finding) => {
  return collection.lastIndexOf(finding)
}

export const findFirstEven = (collection) => {
  return collection.filter(evens)[0]
}

export const findLastEven = (collection) => {
  return collection.filter(evens).reverse()?.[0]
}

export const splitToZero = (number, internal) => {
  return [number, internal]
}
