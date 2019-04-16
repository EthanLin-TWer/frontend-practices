export const getResult = (inputStr) => {
  if (inputStr.split(' ').length === 1) {
    return `${inputStr} 1`
  } else {
    const arr = inputStr.split(' ').filter((input) => input)
    let inputList = []

    for (const s of arr) {
      const input = new Input(s, 1)
      inputList.push(input)
    }

    // get the map for the next step of sizing the same word
    const map = getListMap(inputList)
    const list = []

    for (const entry of Object.keys(map)) {
      const input = new Input(entry, map[entry].length)
      list.push(input)
    }
    inputList = list
    inputList.sort((w1, w2) => w2.getWordCount() - w1.getWordCount())

    const result = []
    for (const w of inputList) {
      result.push(`${w.getDefaultValue()} ${w.getWordCount()}`)
    }

    return result.join('\n')
  }
}

const getListMap = (inputList) => {
  const map = {}
  for (const input of inputList) {
    if (!map.hasOwnProperty(input.getDefaultValue())) {
      const arr = []
      arr.push(input)
      map[input.getDefaultValue()] = arr
    } else {
      map[input.getDefaultValue()].push(input)
    }
  }

  return map
}

class Input {
  constructor(w, i) {
    this.value = w
    this.count = i
  }

  getValue() {
    return this.value
  }

  getWordCount() {
    return this.count
  }
}
