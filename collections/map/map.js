const wordsMap = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
}
export const mapToEven = (collection) => {
  return collection.map((element) => element * 2)
}

export const mapToFourMultiplesAddOne = (collection) => {
  return collection.map((element) => element * 4 + 1)
}

export const mapToThreeMultiples = (collection) => {
  return collection.map((element) => element * 3)
}

export const mapNumberToWord = (collection) => {
  return collection.map((number) => wordsMap[number])
}

export const mapNumberToWordOver26 = (collection) => {
  return [collection]
}

export const sortAscendingly = (collection) => {
  return [collection]
}

export const sortDescendingly = (collection) => {
  return [collection]
}
