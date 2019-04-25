class Rule {
  constructor(number) {
    this.number = number
  }

  static firstMatched(conditions) {
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

function returns(result) {
  return {
    whenMatching(number) {
      return (target) => (target % number === 0 ? result : '')
    },
    whenIncludes(number) {
      return (target) => (target.toString().includes(number) ? result : '')
    },
    whenNoMatching() {
      return () => result.toString()
    },
  }
}

export function fizzbuzz(number) {
  return new Rule(number).value(
    Rule.firstMatched([
      returns('Fizz').whenIncludes(3),
      returns('Buzz').whenIncludes(5),
      Rule.and([
        returns('Fizz').whenMatching(3),
        returns('Buzz').whenMatching(5),
        returns('Whizz').whenMatching(7),
      ]),
      returns(number).whenNoMatching(),
    ])
  )
}
