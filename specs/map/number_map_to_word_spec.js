'use strict'
const number_map_to_word = require('../../practices/map/number_map_to_word.js')

describe('number map to word', function() {
  const collection_a = [1, 2, 3, 4, 5]
  const collection_b = ['a', 'b', 'c', 'd', 'e']

  it('数字映射为字母', function() {
    const result = number_map_to_word(collection_a)
    expect(result).toEqual(collection_b)
  })
})
