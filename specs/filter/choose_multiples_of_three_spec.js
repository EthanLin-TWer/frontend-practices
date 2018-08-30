'use strict'

const choose_multiples_of_three = require('../../practices/filter/choose_multiples_of_three.js')

describe('choose_multiples_of_three', function() {
  const collection = [0, 1, 2, 3, 4, 5, 6, 9, 11]

  it('从collection中选出3的倍数', function() {
    const result = choose_multiples_of_three(collection)

    expect(result).toEqual([0, 3, 6, 9])
  })
})
