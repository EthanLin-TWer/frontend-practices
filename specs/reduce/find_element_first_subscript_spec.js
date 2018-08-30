

const find_element_first_subscript = require('../../practices/reduce/find_element_first_subscript.js')

describe('find_element_first_subscript', function() {
  const collection = [1, 11, 27, 20, 4, 9, 15, 4, 1, 11]
  const element = 4

  it('找出某元素在给定集合中的第一个下标', function() {
    const result = find_element_first_subscript(collection, element)

    expect(result).toEqual(4)
  })
})
