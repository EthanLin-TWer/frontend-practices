import { rank_desc } from '../../practices/map/rank_desc'

describe('rank by desc', function() {
  const collection_a = [3, 2, 4, 5, 6]
  const collection_b = [2, 3, 4, 5, 6]

  it('从小到大排序', function() {
    const result = rank_desc(collection_a)
    expect(result).toEqual(collection_b)
  })
})
