const average_uneven = require('../../../practices/superposition_operation/interval_operation/average_uneven.js')

describe('average_uneven', function() {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  it.skip('1-10的奇数算平均数', function() {
    const result = average_uneven(collection)

    expect(result).toEqual(5)
  })
})
