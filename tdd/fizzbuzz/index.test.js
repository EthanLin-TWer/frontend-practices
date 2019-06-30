// 10:48:33 10:51:58
import { fizzbuzz } from './index'

it('should return 1 when number is not divisible by 3 or 5', () => {
  expect(fizzbuzz(1)).toEqual(1)
})

it('should return Fizz when number is divisible by 3', () => {
  expect(fizzbuzz(3)).toEqual('Fizz')
})

it('should return Buzz when number is divisible by 5', () => {
  expect(fizzbuzz(5)).toEqual('Buzz')
})

it('should return FizzBuzz when number is divisible by 15', () => {
  expect(fizzbuzz(15)).toEqual('FizzBuzz')
})

it('should return Fizz when number is not divisible by 3 but has a 3 in it', () => {
  expect(fizzbuzz(13)).toEqual('Fizz')
})

it('should return Buzz when number is not divisible by 5 but has a 5 in it', () => {
  expect(fizzbuzz(59)).toEqual('Buzz')
})

it('should return FizzBuzz when number is not divisible by 5 or 3 but have both 3 and 5 in it', () => {
  expect(fizzbuzz(53)).toEqual('FizzBuzz')
})
