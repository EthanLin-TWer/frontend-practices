import { countCategories, countElements } from './index'

it.skip('should return object with element counts', () => {
  const collection = ['a', 'a', 'b', 'c']

  const result = countElements(collection)

  expect(result).toEqual({
    a: 2,
    b: 1,
    c: 1,
  })
})

it.skip('should count same elements based on a field on the array', () => {
  const collection = [
    { category: 'shoes', name: 'oxford' },
    { category: 'shoes', name: 'converse' },
    { category: 'clothing', name: 'karma' },
  ]

  const result = countCategories(collection)

  expect(result).toEqual({
    shoes: 2,
    clothing: 1,
  })
})
