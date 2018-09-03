import {
  mapToFourMultiplesAddOne,
  mapToEven,
  mapToThreeMultiples,
  mapNumberToWord,
  mapNumberToWordOver26,
  sortAscendingly,
  sortDescendingly,
} from './map'

describe('mapToEven', () => {
  const collection_a = [1, 2, 3, 4, 5]
  const collection_b = [2, 4, 6, 8, 10]

  it('将集合A中得元素映射成集合B中的元素', () => {
    const result = mapToEven(collection_a)
    expect(result).toEqual(collection_b)
  })
})

describe('mapToFourMultiplesAddOne', () => {
  const collection_a = [1, 2, 3, 4, 5]
  const collection_b = [5, 9, 13, 17, 21]

  it.skip('四倍加一', () => {
    const result = mapToFourMultiplesAddOne(collection_a)
    expect(result).toEqual(collection_b)
  })
})

describe('mapToThreeMultiples', () => {
  const collection_a = [1, 3, 5, 4, 9]
  const collection_b = [3, 9, 15, 12, 27]

  it.skip('三倍映射', () => {
    const result = mapToThreeMultiples(collection_a)
    expect(result).toEqual(collection_b)
  })
})

describe('mapNumberToWord', () => {
  const collection_a = [1, 2, 3, 4, 5]
  const collection_b = ['a', 'b', 'c', 'd', 'e']

  it.skip('数字映射为字母', () => {
    const result = mapNumberToWord(collection_a)
    expect(result).toEqual(collection_b)
  })
})

describe('mapNumberToWordOver26', () => {
  const collection_a = [1, 13, 27, 30, 25, 27]
  const collection_b = ['a', 'm', 'aa', 'ad', 'y', 'aa']

  it.skip('字母表映射2', () => {
    const result = mapNumberToWordOver26(collection_a)
    expect(result).toEqual(collection_b)
  })
})

describe('sortAscendingly', () => {
  const collection_a = [3, 2, 4, 5, 6]
  const collection_b = [2, 3, 4, 5, 6]

  it.skip('从小到大排序', () => {
    const result = sortAscendingly(collection_a)
    expect(result).toEqual(collection_b)
  })
})

describe('sortDescendingly', () => {
  const collection_a = [3, 2, 4, 5, 6]
  const collection_b = [6, 5, 4, 3, 2]

  it.skip('从大到小排序', () => {
    const result = sortDescendingly(collection_a)
    expect(result).toEqual(collection_b)
  })
})
