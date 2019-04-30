// 20:21:03 20:22:16 1min 13s
// 09:27:53 09:31:02 3min 49s Monday, April 29, 2019 -> template configs
// 09:31:46 09:33:30 1min 44s -> keyboard floating, in detail operations
// 09:34:24 09:36:02 1min 38s -> += operations, over navigation
// 09:23:29 09:25:23 1min 56s -> generally slowly...

import { fizzbuzz } from './index'

test.each([
  [1, '1'],
  [2, '2'],
  [3, 'Fizz'],
  [6, 'Fizz'],
  [5, 'Buzz'],
  [10, 'Buzz'],
  [15, 'FizzBuzz'],
])('fizzbuzz(%s) should return %s', (input, expected) => {
  expect(fizzbuzz(input)).toEqual(expected)
})
