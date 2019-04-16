import { Flag } from './flag'

export function createFlagsFactory(name, type, defaultValue) {
  switch (type) {
    case 'number':
      return new Flag(name, type, Number(defaultValue))
    default:
      return new Flag(name, type, defaultValue)
  }
}
