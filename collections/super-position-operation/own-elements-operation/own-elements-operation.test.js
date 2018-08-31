import {
  calculateMedian,
  calculateAverage,
  evenAscOddDesc,
  oneAddNextMultiplyThree,
  rankByTwoLargeOneSmall,
  evenGroupCalculateAverage,
  isExistElement,
  singleElement,
} from './own-elements-operation'

describe('calculateAverage', () => {
  const collection_a = [1, 2, 3, 4, 5, 6]

  it.skip('计算第偶数个元素的平均数', () => {
    const result = calculateAverage(collection_a)
    expect(result).toEqual(4)
  })
})

describe('calculateMedian', () => {
  const collection_a = [1, 2, 3, 4, 5, 6]
  const collection_b = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  it.skip('集合中第偶数个元素的个数为奇数时，计算所有第偶数个元素的中位数', () => {
    const result = calculateMedian(collection_a)
    expect(result).toEqual(4)
  })

  it.skip('集合中第偶数个元素的个数为偶数时，计算所有第偶数个元素的中位数', () => {
    const result = calculateMedian(collection_b)
    expect(result).toEqual(5)
  })
})

describe('evenGroupCalculateAverage', () => {
  const collection_a = [
    1,
    2,
    3,
    4,
    5,
    6,
    12,
    454,
    324,
    21,
    45,
    644,
    34,
    56,
    345,
    570,
    8,
    4,
    14,
  ]
  const collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777]
  const collection_c = [344, 256, 55, 777, 322, 180]

  it.skip('首先选出所有第偶数个元素，然后选出其中的偶数，按几位数分组，并计算每组的平均数', () => {
    const result = evenGroupCalculateAverage(collection_a)
    expect(result).toEqual([4, 56, 556])
  })

  it.skip('首先选出所有第偶数个元素，当不含有偶数时', () => {
    const result = evenGroupCalculateAverage(collection_b)
    expect(result).toEqual([0])
  })

  it.skip('首先选出所有第偶数个元素，然后选出其中的偶数，按几位数分组，当不含有1位，2位的数字，但含有3位的情况时，计算这组的平均数', () => {
    const result = evenGroupCalculateAverage(collection_c)
    expect(result).toEqual([218])
  })
})

describe('isExistElement', () => {
  const collection_a = [1, 2, 3, 4, 5, 6]

  it.skip('下标为偶数的元素中，存在3', () => {
    const result = isExistElement(collection_a, 3)
    expect(result).toEqual(true)
  })

  it.skip('下标为偶数的元素中，不存在4', () => {
    const result = isExistElement(collection_a, 4)
    expect(result).toEqual(false)
  })
})

describe('singleElement', () => {
  const collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5]
  const collection_b = [11, 11, 22, 11, 33, 11]

  it.skip('第偶数个元素中，选出不重复的元素', () => {
    const result = singleElement(collection_a)
    expect(result).toEqual([6, 43, 5])
  })

  it.skip('第偶数个元素中，选出不重复的元素', () => {
    const result = singleElement(collection_b)
    expect(result).toEqual([])
  })
})

describe('evenAscOddDesc', () => {
  const collection_a = [4, 32, 12, 45, 67, 46, 2, 53, 68, 54, 11]
  const collection_b = [2, 4, 12, 32, 46, 54, 68, 67, 53, 45, 11]

  it.skip('偶数奇数分两头，偶数部分从小到大，奇数部分从大到小', () => {
    const result = evenAscOddDesc(collection_a)
    expect(result).toEqual(collection_b)
  })
})

describe('oneAddNextMultiplyThree', () => {
  const collection_a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
  const collection_b = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

  it.skip('每一个数与下一个数相加，乘以3,最后一个数不算', () => {
    const result = oneAddNextMultiplyThree(collection_a)
    expect(result).toEqual(collection_b)
  })
})

describe('rankByTwoLargeOneSmall', () => {
  const collection_a = [2, 8, 1, 9, 6, 4, 3, 10]

  it.skip('两大一小排序', () => {
    const result = rankByTwoLargeOneSmall(collection_a)
    expect(result).toEqual([2, 3, 1, 6, 8, 4, 9, 10])
  })
})
