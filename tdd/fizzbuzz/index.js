class Rule {
  constructor(number) {
    this.number = number
  }

  static first(conditions) {
    return (number) => {
      const found = conditions.find((condition) => condition(number) !== '')
      if (found) {
        return found(number)
      }

      return conditions.findLast(() => true)(number)
    }
  }

  static and(conditions) {
    return (number) => {
      return conditions.reduce(
        (result, condition) => result.concat(condition(number)),
        ''
      )
    }
  }

  value(condition) {
    return condition(this.number)
  }
}

function returnFizzWhenMatchingFirstNumber(number) {
  if (number.toString().includes('3')) {
    return 'Fizz'
  }

  return ''
}

function returnZeroWhenMatchingEmptyValues(number) {
  if (number.length === 0) {
    return '0'
  }

  return ''
}

function returns(result) {
  return {
    whenMatching(number) {
      return function(target) {
        return target % number === 0 ? result : ''
      }
    },
  }
}

function returnsOriginNumber(number) {
  return number.toString()
}

export function fizzbuzz(number) {
  return new Rule(number).value(
    Rule.first([
      returnZeroWhenMatchingEmptyValues,
      returnFizzWhenMatchingFirstNumber,
      Rule.and([
        returns('Fizz').whenMatching(3),
        returns('Buzz').whenMatching(5),
        returns('Whizz').whenMatching(7),
      ]),
      returnsOriginNumber,
    ])
  )
}
