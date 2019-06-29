import { fizzbuzz } from './index'

it('should return 1 when number is not divisible by 3 or 5', () => {
  expect(fizzbuzz(1)).toEqual('1')
})
