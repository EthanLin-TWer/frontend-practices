export const collectAllEven = (collection) => {
  return collection.filter((number) => number % 2 === 0)
}

export const collectLastElement = (collection) => {
  return collection[collection.length - 1]
}

export const getIntegerInterval = (number_a, number_b) => {
  if (number_a < number_b) {
    return Array(number_b)
      .fill(number_a)
      .map((x, i) => x + i)
  }
  return Array(number_a)
    .fill(number_a)
    .map((x, i) => x - i)
}

export const getEvenIntegerInterval = (number_a, number_b) => {
  return [number_a, number_b]
}

export const getIntersection = (collection_a, collection_b) => {
  return [collection_a, collection_b]
}

export const getLetterInterval = (number_a, number_b) => {
  return [number_a, number_b]
}

export const getLetterInterval2 = (number_a, number_b) => {
  return [number_a, number_b]
}

export const getUnion = (collection_a, collection_b) => {
  return [collection_a, collection_b]
}
