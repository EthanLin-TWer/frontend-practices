export const main = (numberString) => {
  let numberArray = numberString.split('')
  let line1 = []
  let line2 = []
  let line3 = []
  for (let number of numberArray) {
    line1.push(numberMap[number][0])
    line2.push(numberMap[number][1])
    line3.push(numberMap[number][2])
  }

  return (
    line1.join(' ') + '\n' + line2.join(' ') + '\n' + line3.join(' ') + '\n'
  )
}

let numberMap = {
  '0': ['._.', '|.|', '|_|'],
  '1': ['...', '..|', '..|'],
  '2': ['._.', '._|', '|_.'],
  '3': ['._.', '._|', '._|'],
  '4': ['...', '|_|', '..|'],
  '5': ['._.', '|_.', '._|'],
  '6': ['._.', '|_.', '|_|'],
  '7': ['._.', '..|', '..|'],
  '8': ['._.', '|_|', '|_|'],
  '9': ['._.', '|_|', '..|'],
}
