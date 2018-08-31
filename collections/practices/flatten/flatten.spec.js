import { twoDimensionalArrayToOneSorted, twoDimensionalArrayToOne } from './flatten'

describe('double_to_one', () => {
  const collection = [1, [2], [3, 4]]

  it.skip('把二维数组变成一维数组', () => {
    const result = twoDimensionalArrayToOne(collection)

    expect(result).toEqual([1, 2, 3, 4])
  })
})

describe('twoDimensionalArrayToOneSorted', () => {
  const collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]]

  it.skip('把二维数组变成一维数组,消除重复,按照第一次出现的顺序排列最后的输出结果', () => {
    const result = twoDimensionalArrayToOneSorted(collection)

    expect(result).toEqual([1, 2, 3, 5, 4])
  })
})
