
const is_exist_element = require('../../../../practices/superposition_operation/own_elements_operation/subscript_is_even/is_exist_element.js')

describe('is_exist_element_spec', function() {
  const collection_a = [1, 2, 3, 4, 5, 6]

  it('下标为偶数的元素中，存在3', function() {
    const result = is_exist_element(collection_a, 3)
    expect(result).toEqual(true)
  })

  it('下标为偶数的元素中，不存在4', function() {
    const result = is_exist_element(collection_a, 4)
    expect(result).toEqual(false)
  })
})
