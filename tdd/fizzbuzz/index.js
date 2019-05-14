function includes3(number) {
  return number.toString().includes('3')
}

function includes5(number) {
  return number.toString().includes('5')
}

export function fizzbuzz(number) {
  if (includes3(number)) {
    return 'Fizz'
  }
  if (includes5(number)) {
    return 'Buzz'
  }

  const result = [
    (n) => (n % 3 === 0 ? 'Fizz' : ''),
    (n) => (n % 5 === 0 ? 'Buzz' : ''),
    (n) => (n % 7 === 0 ? 'Whizz' : ''),
  ].reduce((total, handler) => total.concat(handler(number)), '')

  return result || number.toString()
}
