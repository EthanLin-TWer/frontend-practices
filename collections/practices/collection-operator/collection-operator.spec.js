import {
  collectLastElement,
  collectAllEven,
  getIntegerInterval,
  getEvenIntegerInterval,
  getIntersection,
  getLetterInterval,
  getLetterInterval2,
  getUnion,
} from './collection-operator'

describe('collectAllEven', function() {
  const collection_a = [1, 2, 3, 4, 5]
  const collection_b = [2, 4]

  it.skip('选出给定区间中所有的偶数', function() {
    const result = collectAllEven(collection_a)
    expect(result).toEqual(collection_b)
  })
})

describe('collectLastElement', function() {
  const collection = [1, 2, 3, 4, 5]

  it.skip('弹出集合最后一个元素', function() {
    const result = collectLastElement(collection)
    expect(result).toEqual(5)
  })
})

describe('getIntegerInterval', function() {
  const collection_a = [1, 2, 3, 4, 5]
  const collection_b = [5, 4, 3, 2, 1]

  it.skip('根据给出的两个数字得到一个自增1的数字区间', function() {
    const result = getIntegerInterval(1, 5)
    expect(result).toEqual(collection_a)
  })

  it.skip('根据给出的两个数字得到一个自减1的数字区间', function() {
    const result = getIntegerInterval(5, 1)
    expect(result).toEqual(collection_b)
  })

  it.skip('给定两个相同的数字得到只含此数字的数组', function() {
    const result = getIntegerInterval(5, 5)
    expect(result).toEqual([5])
  })
})

describe('getEvenIntegerInterval', function() {
  const collection_a = [2, 4, 6, 8, 10]
  const collection_b = [10, 8, 6, 4, 2]

  it.skip('根据给出的两个数字得到自增的偶数区间', function() {
    const result = getEvenIntegerInterval(1, 10)
    expect(result).toEqual(collection_a)
  })

  it.skip('根据给出的两个数字得到自减的偶数区间', function() {
    const result = getEvenIntegerInterval(10, 1)
    expect(result).toEqual(collection_b)
  })

  it.skip('给定两个相同的偶数得到只含此数字的数组', function() {
    const result = getEvenIntegerInterval(10, 10)
    expect(result).toEqual([10])
  })

  it.skip('给定两个相同的偶数得到只含此数字的数组', function() {
    const result = getEvenIntegerInterval(5, 5)
    expect(result).toEqual([])
  })
})

describe('getIntersection', function() {
  const collection_a = [10, 27, 28, 19, 5]
  const collection_b = [5, 78, 28, 19, 23]
  const collection_c = [5, 28, 19]

  it.skip('弹出两个集合的交集', function() {
    const result = getIntersection(collection_a, collection_b)
    expect(result).toEqual(collection_c)
  })
})

describe('getLetterInterval', function() {
  const collection_a = ['a', 'b', 'c', 'd', 'e']
  const collection_b = ['e', 'd', 'c', 'b', 'a']

  it.skip('根据给出的两个数字得到对应自增的字母区间', function() {
    const result = getLetterInterval(1, 5)
    expect(result).toEqual(collection_a)
  })

  it.skip('根据给出的两个数字得到对应自减的字母区间', function() {
    const result = getLetterInterval(5, 1)
    expect(result).toEqual(collection_b)
  })

  it.skip('给定两个相同的数字得到只含此数字对应字母的数组', function() {
    const result = getLetterInterval(5, 5)
    expect(result).toEqual(['e'])
  })
})

describe('getLetterInterval2', function() {
  const collection_a = [
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'aa',
    'ab',
    'ac',
    'ad',
    'ae',
    'af',
    'ag',
    'ah',
    'ai',
    'aj',
    'ak',
    'al',
    'am',
    'an',
    'ao',
    'ap',
    'aq',
    'ar',
    'as',
    'at',
    'au',
    'av',
    'aw',
    'ax',
    'ay',
    'az',
    'ba',
  ]
  const collection_b = [
    'ba',
    'az',
    'ay',
    'ax',
    'aw',
    'av',
    'au',
    'at',
    'as',
    'ar',
    'aq',
    'ap',
    'ao',
    'an',
    'am',
    'al',
    'ak',
    'aj',
    'ai',
    'ah',
    'ag',
    'af',
    'ae',
    'ad',
    'ac',
    'ab',
    'aa',
    'z',
    'y',
    'x',
    'w',
    'v',
    'u',
    't',
  ]

  it.skip('根据给出的两个数字得到对应自增的字母区间', function() {
    const result = getLetterInterval2(20, 53)
    expect(result).toEqual(collection_a)
  })

  it.skip('根据给出的两个数字得到对应自减的字母区间', function() {
    const result = getLetterInterval2(53, 20)
    expect(result).toEqual(collection_b)
  })

  it.skip('给定两个相同的数字得到只含此数字对应字母的数组', function() {
    const result = getLetterInterval2(28, 28)
    expect(result).toEqual(['ab'])
  })
})

describe('getUnion', function() {
  const collection_a = [10, 27, 28, 19, 5]
  const collection_b = [5, 78, 28, 19, 23]
  const collection_c = [10, 27, 28, 19, 5, 78, 23]

  it.skip('弹出两个集合的并集', function() {
    const result = getUnion(collection_a, collection_b)
    expect(result).toEqual(collection_c)
  })
})
