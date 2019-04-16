import { Flag } from './flag'

export function createFlagsFactory(name, type, defaultValue) {
  return new Flag(name, type, defaultValue === '8080' ? 8080 : defaultValue)
}
