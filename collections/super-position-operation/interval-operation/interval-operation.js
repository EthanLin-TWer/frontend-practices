export const computerEvenSum = (collection) => {
  return collection
    .filter((number) => number % 2 === 0)
    .reduce((total, number) => total + number, 0)
}

export const computeOddSum = (collection) => {
  const odds = collection.filter((number) => number % 2 !== 0)
  return odds.reduce((total, number) => total + number, 0) / odds.length
}

export const medianToLetter = (collection) => {
  return [collection]
}
