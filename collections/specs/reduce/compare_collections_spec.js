import { compare_collections } from '../../practices/reduce/compare_collections'

describe('compare_collections', function() {
  const collection_a = [1, 11, 27, 20, 4, 9, 15]
  const collection_b = [1, 11, 27, 20, 4, 9, 15]

  it('判断两个集合是否相同', function() {
    const result = compare_collections(collection_a, collection_b)

    expect(result).toEqual(true)
  })
})
