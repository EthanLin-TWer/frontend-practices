'use strict'

const collect_same_elements = require('../../practices/section_1/practice_1/practice.js')

describe('practice-1-1', function() {
  const collection_a = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd']
  const collection_b = ['a', 'd', 'e', 'f']

  it('选出A集合中与B集合中相同的元素', function() {
    const result = collect_same_elements(collection_a, collection_b)

    expect(result).toEqual(['a', 'e', 'f', 'd'])
  })
})
