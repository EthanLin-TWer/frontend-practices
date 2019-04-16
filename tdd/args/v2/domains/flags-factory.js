import { Flag } from './flag'

export function createFlagsFactory(name, type, defaultValue) {
  switch (type) {
    case 'number':
      return new Flag(name, type, Number(defaultValue))
    case 'boolean':
      return new Flag(name, type, false)
    default:
      return new Flag(name, type, defaultValue)
  }
}
