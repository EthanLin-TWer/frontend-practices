import { split_to_zero } from '../../practices/ruduce/split_to_zero'

describe('split_to_zero', function() {
  const collection_a = [0.8, 0.6, 0.4, 0.2, 0]
  const collection_b = [0.7, 0.4, 0.1, -0.2]

  it.skip('根据给定数字无限分割至等于0', function() {
    const result = split_to_zero(0.8, 0.2)
    expect(result).toEqual(collection_a)
  })

  it.skip('根据给定数字无限分割至小于0', function() {
    const result = split_to_zero(0.7, 0.3)
    expect(result).toEqual(collection_b)
  })
})
