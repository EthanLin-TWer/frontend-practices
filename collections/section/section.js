import { chooseNoRepeatNumber } from '../filter/filter'

export const collectSameElements = (collection_a, collection_b) => {
  return collection_a.filter((element) => collection_b.includes(element))
}

export const collectSameElementsInSubArray = (collection_a, collection_b) => {
  return collection_a.filter((element) => collection_b[0].includes(element))
}

export const collectSameElementsWithinObjectValue = (
  collection_a,
  collection_b
) => {
  return collection_a.filter((element) => collection_b.value.includes(element))
}

export const collectSameElementsInBothObjectKeysAndValues = (
  collection_a,
  collection_b
) => {
  return collection_a
    .filter((element) => collection_b.value.includes(element.key))
    .map(({ key }) => key)
}

export const countSameElements = (collection) => {
  return chooseNoRepeatNumber(collection).map((word) => ({
    key: word,
    count: collection.reduce(
      (total, element) => total + (element === word ? 1 : 0),
      0
    ),
  }))
}

export const countSameElementsWithMultipleCounts = (collection) => {
  return [collection]
}

export const countSameElementsWithDifferentCountsFormat = (collection) => {
  return [collection]
}

export const createUpdatedCollection = (collection_a, object_b) => {
  return [collection_a, object_b]
}

export const createUpdatedCollection2 = (collection_a, object_b) => {
  return [collection_a, object_b]
}

export const countAndMinusIntersectionally = (collection_a, object_b) => {
  return [collection_a, object_b]
}

export const countAndMinusIntersectionallyWithMultiplesCounts = (
  collection_a,
  object_b
) => {
  return [collection_a, object_b]
}
