// 20:21:03 20:22:16 1min 13s
// 09:27:53 09:31:02 3min 49s Monday, April 29, 2019 -> template configs
// 09:31:46 09:33:30 1min 44s -> keyboard floating, in detail operations
// 09:34:24 09:36:02 1min 38s -> += operations, over navigation
// 09:23:29 09:25:23 1min 56s -> generally slowly...
// 10:31:06 10:33:16 2min 10s -> wrong short cuts -> IDE stopping...
// 10:33:44 10:35:36 1min 52s -> wrong short cuts -> HHKB + 4K responding slowly
// 10:38:57 10:40:25 1min 28s -> smoother, wasted navigations
// 10:41:04 10:42:30 1min 26s -> Sunday, May 5, 2019 wasted navigations
// navigations:
//   * step further: hard to predict
//   * step one character: had to count
// 10:44:07 10:45:32 1min 25s -> wasted navigations
// 10:46:10 10:47:33 1min 23s -> wasted times(1/7 wasted)
// 10:48:13 10:49:41 1min 28s -> generally slowly
// 10:54:46 10:57:48 3min 2s
// 09:20:11 09:21:27 1min 16s Sunday, May 5, 2019 -> Filco is good!
// 09:23:49 09:28:03 4min 14s -> extracting constants

import { fizzbuzz } from './index'

test.each([
  [1, '1'],
  [2, '2'],
  [3, 'Fizz'],
  [6, 'Fizz'],
  [5, 'Buzz'],
  [10, 'Buzz'],
  [60, 'FizzBuzz'],
  [7, 'Whizz'],
  [14, 'Whizz'],
  [21, 'FizzWhizz'],
  [70, 'BuzzWhizz'],
  [13, 'Fizz'],
  [35, 'Fizz'],
  [59, 'Buzz'],
])('fizzbuzz(%s) should return %s', (input, expected) => {
  expect(fizzbuzz(input)).toEqual(expected)
})
