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
  const elements = collection.map((word) => word.split('-'))
  const words = chooseNoRepeatNumber(elements.map(([word]) => word))

  return words.map((word) => ({
    key: word,
    count: elements
      .filter(([key]) => key === word)
      // eslint-disable-next-line no-unused-vars
      .reduce((total, [key, count = 1]) => total + Number(count), 0),
  }))
}

export const countSameElementsWithDifferentCountsFormat = (collection) => {
  const parseCounts = (word) => {
    if (word.includes('-')) {
      return word.split('-')
    }
    if (word.includes(':')) {
      return word.split(':')
    }
    if (/\[\d*]/.test(word)) {
      // eslint-disable-next-line no-unused-vars
      const [full, actualWord, matchedCount] = /(.*)\[(\d*)]/.exec(word)
      return [actualWord, matchedCount]
    }

    return [word, 1]
  }

  const elements = collection.map(parseCounts)
  const words = chooseNoRepeatNumber(elements.map(([word]) => word))

  return words.map((word) => ({
    name: word,
    summary: elements
      .filter(([key]) => key === word)
      // eslint-disable-next-line no-unused-vars
      .reduce((total, [key, count]) => total + Number(count), 0),
  }))
}

export const createUpdatedCollection = (collection_a, object_b) => {
  return collection_a.map(({ key, count }) => {
    return {
      key,
      count: object_b.value.includes(key) ? count - 1 : count,
    }
  })
}

export const createUpdatedCollection2 = (collection_a, object_b) => {
  return collection_a.map(({ key, count }) => {
    return {
      key,
      count: object_b.value.includes(key)
        ? count - Math.floor(count / 3)
        : count,
    }
  })
}

export const countAndMinusIntersectionally = (collection_a, object_b) => {
  return createUpdatedCollection2(countSameElements(collection_a), object_b)
}

export const countAndMinusIntersectionallyWithMultiplesCounts = (
  collection_a,
  object_b
) => {
  return createUpdatedCollection2(
    countSameElementsWithMultipleCounts(collection_a),
    object_b
  )
}
