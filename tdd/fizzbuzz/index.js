const Shoutouts = {
  Fizz: 'Fizz',
  Buzz: 'Buzz',
  Whizz: 'Whizz',
}

class SpecialNumbers {
  constructor(first, second, third) {
    this.first = first
    this.second = second
    this.third = third
  }
}

export class Game {
  constructor(first, second, third) {
    this.specialNumbers = new SpecialNumbers(first, second, third)
  }

  say({ number }) {
    if (number.toString().includes(this.specialNumbers.first)) {
      return Shoutouts.Fizz
    }

    let result = ''
    if (number % this.specialNumbers.first === 0) {
      result += Shoutouts.Fizz
    }
    if (number % this.specialNumbers.second === 0) {
      result += Shoutouts.Buzz
    }
    if (number % this.specialNumbers.third === 0) {
      result += Shoutouts.Whizz
    }

    return result || number.toString()
  }
}
