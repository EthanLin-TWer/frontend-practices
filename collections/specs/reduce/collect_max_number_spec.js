import { collect_max_number } from '../../practices/reduce/collect_max_number'

describe('collect_max_number', function() {
  const collection = [1, 2, 3, 4, 5]

  it.skip('选出给定数字集合元素的最大值', function() {
    const result = collect_max_number(collection)
    expect(result).toEqual(5)
  })
})
