import {
  computeOddSum,
  computerEvenSum,
  medianToLetter,
} from './interval-operation'

describe('amount_even', () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  it('1-10的偶数算总数', () => {
    const result = computerEvenSum(collection)

    expect(result).toEqual(30)
  })
})

describe('computeOddSum', () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  it('1-10的奇数算平均数', () => {
    const result = computeOddSum(collection)

    expect(result).toEqual(5)
  })
})

describe('medianToLetter', () => {
  const collection = [
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
  ]

  it.skip('(20,53)的中位数(如果是小数上取整)对应的字母', () => {
    const result = medianToLetter(collection)

    expect(result).toEqual('ak')
  })
})
