const Shoutouts = {
  Fizz: 'Fizz',
  Buzz: 'Buzz',
  Whizz: 'Whizz',
}

export function fizzbuzz({ number }) {
  if (number.toString().includes('3')) {
    return Shoutouts.Fizz
  }

  let result = ''
  if (number % 3 === 0) {
    result += Shoutouts.Fizz
  }
  if (number % 5 === 0) {
    result += Shoutouts.Buzz
  }
  if (number % 7 === 0) {
    result += Shoutouts.Whizz
  }
  return result || number.toString()
}
