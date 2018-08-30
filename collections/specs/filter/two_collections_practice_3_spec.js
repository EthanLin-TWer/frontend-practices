import { choose_divisible_integer } from '../../practices/filter/two_collections_practice_3'

describe('choose_divisible_integer', function() {
  const collection_a = [4, 7, 9, 25, 16, 21, 64, 32, 35, 49]
  const collection_b = [2, 3, 5]

  it.skip('选出A集合中可以被B集合中整除的数', function() {
    const result = choose_divisible_integer(collection_a, collection_b)

    expect(result).toEqual([4, 9, 25, 16, 21, 64, 32, 35])
  })
})
