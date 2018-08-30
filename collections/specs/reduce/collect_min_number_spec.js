import { collect_min_number } from '../../practices/reduce/collect_min_number'

describe('collect_min_number', function() {
  const collection = [1, 8, 9, 21, 5]

  it('选出给定数字集合元素的最小值', function() {
    const result = collect_min_number(collection)
    expect(result).toEqual(1)
  })
})
