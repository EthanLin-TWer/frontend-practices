

const get_union = require('../../practices/collectionOperator/get_union.js')

describe('get_union', function() {
  const collection_a = [10, 27, 28, 19, 5]
  const collection_b = [5, 78, 28, 19, 23]
  const collection_c = [10, 27, 28, 19, 5, 78, 23]

  it('弹出两个集合的并集', function() {
    const result = get_union(collection_a, collection_b)
    expect(result).toEqual(collection_c)
  })
})
