import {
  collectSameElementsInSubArray,
  collectSameElements,
  collectSameElementsWithinObjectValue,
  collectSameElementsInBothObjectKeysAndValues,
  countSameElements,
  countSameElementsWithMultipleCounts,
  countSameElementsWithDifferentCountsFormat,
  createUpdatedCollection,
  createUpdatedCollection2,
  countAndMinusIntersectionally,
  countAndMinusIntersectionallyWithMultiplesCounts,
} from './section'

describe('collectSameElements', () => {
  const collection_a = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd']
  const collection_b = ['a', 'd', 'e', 'f']

  it('选出A集合中与B集合中相同的元素', () => {
    const result = collectSameElements(collection_a, collection_b)

    expect(result).toEqual(['a', 'e', 'f', 'd'])
  })
})

describe('collectSameElementsInSubArray', () => {
  const collection_a = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd']
  const collection_b = [['a', 'd', 'e', 'f']]

  it('选出A集合中与B集合中子数组的元素相同的元素', () => {
    const result = collectSameElementsInSubArray(collection_a, collection_b)

    expect(result).toEqual(['a', 'e', 'f', 'd'])
  })
})

describe('collectSameElementsWithinObjectValue', () => {
  const collection_a = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd']
  const collection_b = { value: ['a', 'd', 'e', 'f'] }

  it('选出A集合中跟B对象中value属性中的元素相同的元素', () => {
    const result = collectSameElementsWithinObjectValue(
      collection_a,
      collection_b
    )

    expect(result).toEqual(['a', 'e', 'f', 'd'])
  })
})

describe('collectSameElementsInBothObjectKeysAndValues', () => {
  const collection_a = [
    { key: 'a' },
    { key: 'e' },
    { key: 'h' },
    { key: 't' },
    { key: 'f' },
    { key: 'c' },
    { key: 'g' },
    { key: 'b' },
    { key: 'd' },
  ]
  const collection_b = { value: ['a', 'd', 'e', 'f'] }

  it.skip('选出A集合中元素的key属性，跟B对象中value属性中的元素相同的元素', () => {
    const result = collectSameElementsInBothObjectKeysAndValues(
      collection_a,
      collection_b
    )

    expect(result).toEqual(['a', 'e', 'f', 'd'])
  })
})

describe('countSameElements', () => {
  const collection = [
    'a',
    'a',
    'a',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'g',
    'g',
    'g',
    'g',
    'g',
    'g',
    'g',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'd',
    'd',
    'd',
    'd',
    'd',
  ]

  it.skip('把A集合中相同的元素统计出数量', () => {
    const result = countSameElements(collection)

    expect(result).toEqual([
      { key: 'a', count: 3 },
      { key: 'e', count: 7 },
      { key: 'h', count: 11 },
      { key: 't', count: 20 },
      { key: 'f', count: 9 },
      { key: 'c', count: 8 },
      { key: 'g', count: 7 },
      { key: 'b', count: 6 },
      { key: 'd', count: 5 },
    ])
  })
})

describe('countSameElementsWithMultipleCounts', () => {
  const collection = [
    'a',
    'a',
    'a',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'g',
    'g',
    'g',
    'g',
    'g',
    'g',
    'g',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'd-5',
  ]

  it.skip('把A集合中相同的元素统计出数量', () => {
    const result = countSameElementsWithMultipleCounts(collection)

    expect(result).toEqual([
      { key: 'a', count: 3 },
      { key: 'e', count: 7 },
      { key: 'h', count: 11 },
      { key: 't', count: 20 },
      { key: 'f', count: 9 },
      { key: 'c', count: 8 },
      { key: 'g', count: 7 },
      { key: 'b', count: 6 },
      { key: 'd', count: 5 },
    ])
  })
})

describe('countSameElementsWithDifferentCountsFormat', () => {
  const collection = [
    'a',
    'a',
    'a',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h[3]',
    'h',
    'h',
    't',
    't-2',
    't',
    't',
    't',
    't',
    't',
    't',
    't[10]',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'c:8',
    'g',
    'g',
    'g',
    'g',
    'g',
    'g',
    'g',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'd-5',
  ]

  it.skip('把A集合中相同的元素统计出数量', () => {
    const result = countSameElementsWithDifferentCountsFormat(collection)

    expect(result).toEqual([
      { name: 'a', summary: 3 },
      { name: 'e', summary: 7 },
      { name: 'h', summary: 11 },
      { name: 't', summary: 19 },
      { name: 'f', summary: 9 },
      { name: 'c', summary: 8 },
      { name: 'g', summary: 7 },
      { name: 'b', summary: 6 },
      { name: 'd', summary: 5 },
    ])
  })
})

describe('createUpdatedCollection', () => {
  const collection_a = [
    { key: 'a', count: 2 },
    { key: 'e', count: 2 },
    { key: 'h', count: 2 },
    { key: 't', count: 2 },
    { key: 'f', count: 2 },
    { key: 'c', count: 2 },
    { key: 'g', count: 2 },
    { key: 'b', count: 2 },
    { key: 'd', count: 2 },
  ]

  const object_b = { value: ['a', 'd', 'e', 'f'] }

  it.skip('选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count-1，输出减过之后的新A集合', () => {
    const result = createUpdatedCollection(collection_a, object_b)

    expect(result).toEqual([
      { key: 'a', count: 1 },
      { key: 'e', count: 1 },
      { key: 'h', count: 2 },
      { key: 't', count: 2 },
      { key: 'f', count: 1 },
      { key: 'c', count: 2 },
      { key: 'g', count: 2 },
      { key: 'b', count: 2 },
      { key: 'd', count: 1 },
    ])
  })
})

describe('createUpdatedCollection2', () => {
  const collection_a = [
    { key: 'a', count: 3 },
    { key: 'e', count: 7 },
    { key: 'h', count: 11 },
    { key: 't', count: 20 },
    { key: 'f', count: 9 },
    { key: 'c', count: 8 },
    { key: 'g', count: 7 },
    { key: 'b', count: 6 },
    { key: 'd', count: 5 },
  ]

  const object_b = { value: ['a', 'd', 'e', 'f'] }

  it.skip('选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新A集', () => {
    const result = createUpdatedCollection2(collection_a, object_b)

    expect(result).toEqual([
      { key: 'a', count: 2 },
      { key: 'e', count: 5 },
      { key: 'h', count: 11 },
      { key: 't', count: 20 },
      { key: 'f', count: 6 },
      { key: 'c', count: 8 },
      { key: 'g', count: 7 },
      { key: 'b', count: 6 },
      { key: 'd', count: 4 },
    ])
  })
})

describe('countAndMinusIntersectionally', () => {
  const collection_a = [
    'a',
    'a',
    'a',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'g',
    'g',
    'g',
    'g',
    'g',
    'g',
    'g',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'd',
    'd',
    'd',
    'd',
    'd',
  ]

  const object_b = { value: ['a', 'd', 'e', 'f'] }

  it.skip('统计出A集合中相同的元素的个数，形成C集合，C集合中的元素要形如{key:"a", count: 3}，然后选出C集合中的元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新C集合', () => {
    const result = countAndMinusIntersectionally(collection_a, object_b)

    expect(result).toEqual([
      { key: 'a', count: 2 },
      { key: 'e', count: 5 },
      { key: 'h', count: 11 },
      { key: 't', count: 20 },
      { key: 'f', count: 6 },
      { key: 'c', count: 8 },
      { key: 'g', count: 7 },
      { key: 'b', count: 6 },
      { key: 'd', count: 4 },
    ])
  })
})

describe('countAndMinusIntersectionallyWithMultiplesCounts', () => {
  const collection_a = [
    'a',
    'a',
    'a',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'e',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    'h',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    't',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'f',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'g',
    'g',
    'g',
    'g',
    'g',
    'g',
    'g',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'd-5',
  ]

  const object_b = { value: ['a', 'd', 'e', 'f'] }

  it.skip('统计出A集合中相同的元素的个数，有过有-就把-右边的数字也计算入个数，形成C集合，C集合中的元素要形如{key:"a", count: 3}，然后选出C集合中的元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新C集合', () => {
    const result = countAndMinusIntersectionallyWithMultiplesCounts(
      collection_a,
      object_b
    )

    expect(result).toEqual([
      { key: 'a', count: 2 },
      { key: 'e', count: 5 },
      { key: 'h', count: 11 },
      { key: 't', count: 20 },
      { key: 'f', count: 6 },
      { key: 'c', count: 8 },
      { key: 'g', count: 7 },
      { key: 'b', count: 6 },
      { key: 'd', count: 4 },
    ])
  })
})
