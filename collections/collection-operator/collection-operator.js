import { evens } from '../utils'

export const collectAllEven = (collection) => {
  return collection.filter(evens)
}

export const collectLastElement = (collection) => {
  return collection[collection.length - 1]
}

export const getIntegerInterval = (number_a, number_b) => {
  if (number_b === number_a) {
    return [number_b]
  }

  const steps = number_b - number_a
  const incrementer = number_b >= number_a ? 1 : -1
  const counts = Math.abs(steps + incrementer)

  return Array(counts)
    .fill(number_a)
    .map((x, i) => x + i * incrementer)
}

export const getEvenIntegerInterval = (number_a, number_b) => {
  return [number_a, number_b]
}

export const getIntersection = (collection_a, collection_b) => {
  return collection_a.filter((element) => {
    return collection_b.includes(element)
  })
}

export const getLetterInterval = (number_a, number_b) => {
  return [number_a, number_b]
}

export const getLetterInterval2 = (number_a, number_b) => {
  return [number_a, number_b]
}

export const getUnion = (collection_a, collection_b) => {
  return collection_a.concat(
    collection_b.filter((element) => !collection_a.includes(element))
  )
}
