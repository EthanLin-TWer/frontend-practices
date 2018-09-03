export const computerEvenSum = (collection) => {
  return collection
    .filter((number) => number % 2 === 0)
    .reduce((total, number) => total + number, 0)
}

export const computeOddSum = (collection) => {
  return [collection]
}

export const medianToLetter = (collection) => {
  return [collection]
}
