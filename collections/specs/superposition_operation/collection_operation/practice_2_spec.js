const hybrid_operation_to_uneven = require('../../../practices/superposition_operation/collection_operation/practice_2.js')

describe('hybrid_operation_to_uneven', function() {
  const collection = [1, 5, 7, 12, 11, 35, 54, 67, 70]

  it.skip('每一个奇数*3+2', function() {
    const result = hybrid_operation_to_uneven(collection)

    expect(result).toEqual([5, 17, 23, 35, 107, 203])
  })
})
