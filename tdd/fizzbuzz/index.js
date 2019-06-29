function shouldSayFizz(number) {
  return number % 3 === 0 || /3/.test(number)
}
function shouldSayBuzz(number) {
  return number % 5 === 0 || /5/.test(number)
}

export function fizzbuzz(number) {
  if (shouldSayFizz(number) && shouldSayBuzz(number)) {
    return 'FizzBuzz'
  }
  if (shouldSayFizz(number)) {
    return 'Fizz'
  }
  if (shouldSayBuzz(number)) {
    return 'Buzz'
  }
  return number
}
