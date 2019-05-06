function contains(one) {
  return function(number) {
    return number.toString().includes(one)
  }
}

function sayWordIfDivisible(by, word) {
  return function(number) {
    return number % by === 0 ? word : ''
  }
}

const Words = {
  Fizz: 'Fizz',
  Buzz: 'Buzz',
  Whizz: 'Whizz',
}

export function fizzbuzz(number) {
  if (contains(3)(number)) return Words.Fizz
  if (contains(5)(number)) return Words.Buzz
  if (contains(7)(number)) return Words.Whizz

  const result = [
    sayWordIfDivisible(3, Words.Fizz),
    sayWordIfDivisible(5, Words.Buzz),
    sayWordIfDivisible(7, Words.Whizz),
  ].reduce((final, next) => final.concat(next(number)), '')

  return result || number.toString()
}
