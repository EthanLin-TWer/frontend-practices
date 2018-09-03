import {
  chooseMultiplesOfThree,
  chooseEven,
  chooseNoRepeatNumber,
  groupingCount,
  chooseCommonElements,
  chooseNoCommonElements,
  chooseDivisibleInteger,
} from './filter'

describe('chooseEven', () => {
  const collection = [0, 1, 2, 3, 4, 6]

  it('从collection中选出偶数', () => {
    const result = chooseEven(collection)

    expect(result).toEqual([0, 2, 4, 6])
  })
})

describe('chooseMultiplesOfThree', () => {
  const collection = [0, 1, 2, 3, 4, 5, 6, 9, 11]

  it('从collection中选出3的倍数', () => {
    const result = chooseMultiplesOfThree(collection)

    expect(result).toEqual([0, 3, 6, 9])
  })
})

describe('chooseNoRepeatNumber', () => {
  const collection = [1, 1, 1, 2, 2, 3, 4]

  it('从collection中选出不重复的数字', () => {
    const result = chooseNoRepeatNumber(collection)

    expect(result).toEqual([1, 2, 3, 4])
  })
})

describe('groupingCount', () => {
  const collection = [1, 1, 1, 1, 2, 3, 1, 3, 4, 2, 3, 1, 3, 4, 2]

  it.skip('从collection中计算出每个数的个数', () => {
    const result = groupingCount(collection)

    expect(result).toEqual({ '1': 6, '2': 3, '3': 4, '4': 2 })
  })
})

describe('chooseCommonElements', () => {
  const collection_a = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd']
  const collection_b = ['a', 'd', 'e', 'f']

  it.skip('选出A集合中与B集合中的共有元素', () => {
    const result = chooseCommonElements(collection_a, collection_b)

    expect(result).toEqual(['a', 'e', 'f', 'd'])
  })
})

describe('chooseNoCommonElements', () => {
  const collection_a = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd']
  const collection_b = ['a', 'd', 'e', 'f']

  it.skip('选出A集合中与B集合中的不共有元素', () => {
    const result = chooseNoCommonElements(collection_a, collection_b)

    expect(result).toEqual(['h', 't', 'c', 'g', 'b'])
  })
})

describe('chooseDivisibleInteger', () => {
  const collection_a = [4, 7, 9, 25, 16, 21, 64, 32, 35, 49]
  const collection_b = [2, 3, 5]

  it.skip('选出A集合中可以被B集合中整除的数', () => {
    const result = chooseDivisibleInteger(collection_a, collection_b)

    expect(result).toEqual([4, 9, 25, 16, 21, 64, 32, 35])
  })
})
