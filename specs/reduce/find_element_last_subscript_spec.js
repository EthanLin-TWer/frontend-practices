

const find_element_last_subscript = require('../../practices/reduce/find_element_last_subscript.js')

describe('find_element_last_subscript', function() {
  const collection = [1, 11, 27, 20, 4, 9, 15, 4, 1, 11]
  const element = 4

  it('找出某元素在给定集合中的最后一个下标', function() {
    const result = find_element_last_subscript(collection, element)

    expect(result).toEqual(7)
  })
})
