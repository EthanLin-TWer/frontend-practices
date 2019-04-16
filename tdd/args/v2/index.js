import { Flag } from './domains/flag'

export class Schema {
  constructor(schema) {
    this.schema = schema
    this.flags = schema.split(' ')
  }

  getFlags() {
    return this.flags.map((flag) => {
      const [name, type, defaultValue = false] = flag.split(':')

      return new Flag(name, type, defaultValue === '8080' ? 8080 : defaultValue)
    })
  }
}
