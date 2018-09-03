import { evens } from '../utils'

export const chooseEven = (collection) => {
  return collection.filter(evens)
}

export const chooseMultiplesOfThree = (collection) => {
  return collection.filter((element) => element % 3 === 0)
}

export const chooseNoRepeatNumber = (collection) => {
  return collection.reduce((result, next) => {
    return result.includes(next) ? result : result.concat(next)
  }, [])
}

export const groupingCount = (collection) => {
  return chooseNoRepeatNumber(collection)
    .map((number) => ({
      [number]: collection.filter((element) => element === number).length,
    }))
    .reduce((a, b) => ({ ...a, ...b }), {})
}

export const chooseCommonElements = (collection_a, collection_b) => {
  return collection_a.filter((element) => collection_b.includes(element))
}

export const chooseNoCommonElements = (collection_a, collection_b) => {
  return collection_a.filter((element) => !collection_b.includes(element))
}

export const chooseDivisibleInteger = (collection_a, collection_b) => {
  return collection_a.filter((element) =>
    collection_b.some((b) => element % b === 0)
  )
}
