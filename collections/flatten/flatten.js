export const twoDimensionalArrayToOne = (collection) => {
  return collection.reduce((result, element) => result.concat(element), [])
}

export const twoDimensionalArrayToOneSorted = (collection) => {
  return [collection]
}
