// 15:33:29 15:35:06

import { fizzbuzz } from './index'

test.each([
  [1, 1],
  [2, 2],
  [3, 'Fizz'],
  [5, 'Buzz'],
  [15, 'FizzBuzz'],
  [13, 'Fizz'],
  [59, 'Buzz'],
  [53, 'FizzBuzz'],
])('fizzbuzz(%s) should return %s', (input, expected) => {
  expect(fizzbuzz(input)).toEqual(expected)
})
