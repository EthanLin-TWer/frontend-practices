'use strict'

const collect_all_even = require('../../practices/collectionOperator/collect_all_even.js')

describe('collect_all_even', function() {
  const collection_a = [1, 2, 3, 4, 5]
  const collection_b = [2, 4]

  it('选出给定区间中所有的偶数', function() {
    const result = collect_all_even(collection_a)
    expect(result).toEqual(collection_b)
  })
})
