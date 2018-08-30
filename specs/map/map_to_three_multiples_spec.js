import { map_to_three_multiples } from '../../practices/map/map_to_three_multiples'

describe('map to three multiples', function() {
  const collection_a = [1, 3, 5, 4, 9]
  const collection_b = [3, 9, 15, 12, 27]

  it('三倍映射', function() {
    const result = map_to_three_multiples(collection_a)
    expect(result).toEqual(collection_b)
  })
})
