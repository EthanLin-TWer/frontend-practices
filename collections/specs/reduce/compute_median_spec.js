import { compute_median } from '../../practices/reduce/compute_median'

describe('compute_median', function() {
  const collection_a = [1, 1, 1, 2, 3]
  const collection_b = [1, 1, 2, 3]
  const collection_c = [1, 4, 6, 2, 3, 10, 9, 8, 11, 20, 19, 30]

  it('计算给定奇数个数字的集合的中位数', function() {
    const result = compute_median(collection_a)
    expect(result).toEqual(1)
  })

  it('计算给定偶数个数字的集合的中位数', function() {
    const result = compute_median(collection_b)
    expect(result).toEqual(1.5)
  })

  it('计算给定偶数个数字的集合的中位数-2', function() {
    const result = compute_median(collection_c)
    expect(result).toEqual(8.5)
  })
})
