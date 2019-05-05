const Constant = {
  Fizz: 'Fizz',
  Buzz: 'Buzz',
  Whizz: 'Whizz',
}
export function fizzbuzz(number) {
  if (number.toString().includes('3')) {
    return Constant.Fizz
  }
  if (number.toString().includes('5')) {
    return Constant.Buzz
  }
  let result = ''
  if (number % 3 === 0) {
    result += Constant.Fizz
  }
  if (number % 5 === 0) {
    result += Constant.Buzz
  }
  if (number % 7 === 0) {
    result += Constant.Whizz
  }
  return result || number.toString()
}
