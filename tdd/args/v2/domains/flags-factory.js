import { Flag } from './flag'

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
