import {
  averageToLetter,
  evenToLetter,
  multipleOddAndAdd,
  multipleAndComputeSum,
  multipleOddAndComputeSum,
} from './collection-operation'

describe('even_to_letter', () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  it.skip('数组的每个偶数映射为字母', () => {
    const result = evenToLetter(collection)

    expect(result).toEqual(['b', 'd', 'f', 'h', 'j'])
  })
})

describe('average_to_letter', () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  it.skip('数组的平均数（如果是小数上取整）映射为字母', () => {
    const result = averageToLetter(collection)

    expect(result).toEqual('f')
  })
})

describe('multipleAndComputeSum', () => {
  const collection = [1, 5, 7, 11, 35, 67]

  it.skip('每一个数*3 +2再算总和', () => {
    const result = multipleAndComputeSum(collection)

    expect(result).toEqual(390)
  })
})

describe('multipleOddAndComputeSum', () => {
  const collection = [1, 5, 7, 12, 11, 35, 54, 67, 70]

  it.skip('每一个奇数*3+2', () => {
    const result = multipleOddAndAdd(collection)

    expect(result).toEqual([5, 17, 23, 35, 107, 203])
  })
})

describe('multipleOddAndComputeSum', () => {
  const collection = [1, 5, 7, 12, 11, 35, 54, 67, 70]

  it.skip('每一个奇数*3+5再求总和', () => {
    const result = multipleOddAndComputeSum(collection)

    expect(result).toEqual(408)
  })
})
