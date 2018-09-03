const words = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
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
  return collection.map((number, index) => words[index])
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
