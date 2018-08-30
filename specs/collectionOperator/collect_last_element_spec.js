'use strict'

const collect_last_element = require('../../practices/collectionOperator/collect_last_element.js')

describe('collect_last_element', function() {
  const collection = [1, 2, 3, 4, 5]

  it('弹出集合最后一个元素', function() {
    const result = collect_last_element(collection)
    expect(result).toEqual(5)
  })
})
