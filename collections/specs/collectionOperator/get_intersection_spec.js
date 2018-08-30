import { get_intersection } from '../../practices/collectionOperator/get_intersection'

describe('get_intersection', function() {
  const collection_a = [10, 27, 28, 19, 5]
  const collection_b = [5, 78, 28, 19, 23]
  const collection_c = [5, 28, 19]

  it.skip('弹出两个集合的交集', function() {
    const result = get_intersection(collection_a, collection_b)
    expect(result).toEqual(collection_c)
  })
})
