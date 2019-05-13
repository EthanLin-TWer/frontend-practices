function includes(number) {
  return function(another) {
    return another.toString().includes(number)
  }
}

export function fizzbuzz(number) {
  if (includes(3)(number)) {
    return 'Fizz'
  }
  if (includes(5)(number)) {
    return 'Buzz'
  }

  let result = ''
  if (number % 3 === 0) {
    result += 'Fizz'
  }
  if (number % 5 === 0) {
    result += 'Buzz'
  }
  if (number % 7 === 0) {
    result += 'Whizz'
  }
  return result || number.toString()
}
