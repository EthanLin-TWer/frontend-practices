'use strict'

const choose_even = require('../../practices/filter/choose_even.js')

describe('choose_even', function() {
  const collection = [0, 1, 2, 3, 4, 6]

  it('从collection中选出偶数', function() {
    const result = choose_even(collection)

    expect(result).toEqual([0, 2, 4, 6])
  })
})
