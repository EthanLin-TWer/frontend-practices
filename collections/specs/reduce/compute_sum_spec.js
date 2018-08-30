import { compute_elements_sum } from '../../practices/reduce/compute_sum'

describe('compute_elements_sum', function() {
  const collection = [1, 2, 3, 4, 5]

  it('计算给定集合元素的总和', function() {
    const result = compute_elements_sum(collection)

    expect(result).toEqual(15)
  })
})
