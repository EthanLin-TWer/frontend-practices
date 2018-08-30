import { number_map_to_word_over_26 } from '../../practices/map/number_map_to_word_over_26'

describe('number_map_to_word_over_26', function() {
  const collection_a = [1, 13, 27, 30, 25, 27]
  const collection_b = ['a', 'm', 'aa', 'ad', 'y', 'aa']

  it.skip('字母表映射2', function() {
    const result = number_map_to_word_over_26(collection_a)
    expect(result).toEqual(collection_b)
  })
})
