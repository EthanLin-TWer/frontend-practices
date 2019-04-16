import { Flag } from './domains/flag'

export class Schema {
  constructor(schema) {
    this.schema = schema
  }

  getFlags() {
    const flags = this.schema.split(' ')
    return flags.map((flag) => {
      const [name, type, defaultValue = false] = flag.split(':')
      return new Flag(name, type, defaultValue)
    })
  }
}
