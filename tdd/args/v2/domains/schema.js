import { createFlagsFactory } from './flags-factory'

export class Schema {
  constructor(schema) {
    this.schema = schema
    this.flags = schema.split(' ')
  }

  getFlags() {
    return this.flags.map((flag) => {
      const [name, type, defaultValue] = flag.split(':')

      return createFlagsFactory(name, type, defaultValue)
    })
  }
}
