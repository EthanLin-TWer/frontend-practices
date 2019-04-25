// 20:21:03 20:22:16 1min 13s

import { fizzbuzz } from './index'

test.each([
  [1, '1'],
  [2, '2'],
  [3, 'Fizz'],
  [6, 'Fizz'],
  [5, 'Buzz'],
  [10, 'Buzz'],
  [7, 'Whizz'],
  [14, 'Whizz'],
  [60, 'FizzBuzz'],
  [21, 'FizzWhizz'],
  [70, 'BuzzWhizz'],
  [35, 'Fizz'],
  [50, 'Buzz'],
])('fizzbuzz(%s) should return %s', (input, expected) => {
  expect(fizzbuzz(input)).toEqual(expected)
})
