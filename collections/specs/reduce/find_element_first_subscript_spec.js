import { calculate_elements_sum } from '../../practices/reduce/find_element_first_subscript'

describe('find_element_first_subscript', function() {
  const collection = [1, 11, 27, 20, 4, 9, 15, 4, 1, 11]
  const element = 4

  it.skip('找出某元素在给定集合中的第一个下标', function() {
    const result = calculate_elements_sum(collection, element)

    expect(result).toEqual(4)
  })
})
