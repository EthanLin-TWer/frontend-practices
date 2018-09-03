import {
  collectMinNumber,
  collectMaxNumber,
  compareCollections,
  computeAverage,
  computeChainMedian,
  computeMedian,
  computeSum,
  calculateFirstSubscription,
  calculateLastSubscription,
  findFirstEven,
  findLastEven,
  splitToZero,
} from './reduce'

describe('collectMaxNumber', () => {
  const collection = [1, 2, 3, 4, 5]

  it('选出给定数字集合元素的最大值', () => {
    const result = collectMaxNumber(collection)
    expect(result).toEqual(5)
  })
})

describe('collectMinNumber', () => {
  const collection = [1, 8, 9, 21, 5]

  it('选出给定数字集合元素的最小值', () => {
    const result = collectMinNumber(collection)
    expect(result).toEqual(1)
  })
})

describe('compareCollections', () => {
  const collection_a = [1, 11, 27, 20, 4, 9, 15]
  const collection_b = [1, 11, 27, 20, 4, 9, 15]

  it.skip('判断两个集合是否相同', () => {
    const result = compareCollections(collection_a, collection_b)

    expect(result).toEqual(true)
  })
})

describe('computeAverage', () => {
  const collection = [1, 3, 5, 98, 67, 453]

  it.skip('计算给定数字集合元素的平均值', () => {
    const result = computeAverage(collection)
    expect(result).toEqual(104.5)
  })
})

describe('computeChainMedian', () => {
  const chain = '1->4->6->2->3->10->9->8->11->20->19->30'

  it.skip('计算给定链表的中位数', () => {
    const result = computeChainMedian(chain)
    expect(result).toEqual(8.5)
  })
})

describe('computeMedian', () => {
  const collection_a = [1, 1, 1, 2, 3]
  const collection_b = [1, 1, 2, 3]
  const collection_c = [1, 4, 6, 2, 3, 10, 9, 8, 11, 20, 19, 30]

  it.skip('计算给定奇数个数字的集合的中位数', () => {
    const result = computeMedian(collection_a)
    expect(result).toEqual(1)
  })

  it.skip('计算给定偶数个数字的集合的中位数', () => {
    const result = computeMedian(collection_b)
    expect(result).toEqual(1.5)
  })

  it.skip('计算给定偶数个数字的集合的中位数-2', () => {
    const result = computeMedian(collection_c)
    expect(result).toEqual(8.5)
  })
})

describe('computeSum', () => {
  const collection = [1, 2, 3, 4, 5]

  it.skip('计算给定集合元素的总和', () => {
    const result = computeSum(collection)

    expect(result).toEqual(15)
  })
})

describe('calculateFirstSubscription', () => {
  const collection = [1, 11, 27, 20, 4, 9, 15, 4, 1, 11]
  const element = 4

  it.skip('找出某元素在给定集合中的第一个下标', () => {
    const result = calculateFirstSubscription(collection, element)

    expect(result).toEqual(4)
  })
})

describe('calculateLastSubscription', () => {
  const collection = [1, 11, 27, 20, 4, 9, 15, 4, 1, 11]
  const element = 4

  it.skip('找出某元素在给定集合中的最后一个下标', () => {
    const result = calculateLastSubscription(collection, element)

    expect(result).toEqual(7)
  })
})

describe('findFirstEven', () => {
  const collection = [1, 11, 27, 20, 4, 9, 15]

  it.skip('找出给定集合元素的第一个偶数', () => {
    const result = findFirstEven(collection)

    expect(result).toEqual(20)
  })
})

describe('findLastEven', () => {
  const collection = [1, 11, 27, 20, 4, 9, 15]

  it.skip('找出给定集合元素的最后一个偶数', () => {
    const result = findLastEven(collection)

    expect(result).toEqual(4)
  })
})

describe('splitToZero', () => {
  const collection_a = [0.8, 0.6, 0.4, 0.2, 0]
  const collection_b = [0.7, 0.4, 0.1, -0.2]

  it.skip('根据给定数字无限分割至等于0', () => {
    const result = splitToZero(0.8, 0.2)
    expect(result).toEqual(collection_a)
  })

  it.skip('根据给定数字无限分割至小于0', () => {
    const result = splitToZero(0.7, 0.3)
    expect(result).toEqual(collection_b)
  })
})
