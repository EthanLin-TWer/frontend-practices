export const words = [
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

export const evens = (element) => element % 2 === 0
export const odds = (element) => element % 2 !== 0

export const multiplier = (multiple) => (element) => {
  return element * multiple
}
