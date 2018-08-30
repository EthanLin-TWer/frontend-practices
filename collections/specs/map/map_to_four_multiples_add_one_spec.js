import { map_to_four_multiples_add_one } from '../../practices/map/map_to_four_multiples_add_one'

describe('map_to_four_multiples_add_one', function() {
  const collection_a = [1, 2, 3, 4, 5]
  const collection_b = [5, 9, 13, 17, 21]

  it('四倍加一', function() {
    const result = map_to_four_multiples_add_one(collection_a)
    expect(result).toEqual(collection_b)
  })
})
