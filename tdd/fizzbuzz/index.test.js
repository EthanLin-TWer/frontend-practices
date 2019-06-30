// 15:26:32 15:28:26

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
