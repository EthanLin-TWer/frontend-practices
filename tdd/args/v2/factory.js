import { Argument } from './domains/arg'
import { Flag } from './domains/flag'

export function createFlagsFactory(name, type, defaultValue) {
  switch (type) {
    case 'number':
      return new Flag(name, type, Number(defaultValue))
    case 'boolean':
      return new Flag(name, type, false)
    case 'string':
      return new Flag(name, type, defaultValue)
    case '[string]':
      return new Flag(name, type, defaultValue.split(','))
    case '[number]':
      return new Flag(
        name,
        type,
        defaultValue.split(',').map((value) => Number(value))
      )
    default:
      return new Flag(name, type, defaultValue)
  }
}

export function createArgsFactory(name, type, value) {
  switch (type) {
    case 'number':
      return new Argument(name, Number(value))
    case 'boolean':
      return new Argument(name, true)
    case 'string':
      return new Argument(name, value)
    case '[string]':
      return new Argument(name, type)
    case '[number]':
      return new Argument(name, type)
    default:
      return new Argument(name, type)
  }
}
