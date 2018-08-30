const hybrid_operation = require('../../../practices/superposition_operation/collection_operation/practice_1.js')

describe('hybrid_operation', function() {
  const collection = [1, 5, 7, 11, 35, 67]

  it.skip('每一个数*3 +2再算总和', function() {
    const result = hybrid_operation(collection)

    expect(result).toEqual(390)
  })
})
