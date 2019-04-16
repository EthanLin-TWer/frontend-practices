import { createFlagsFactory } from '../factory'

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

  findFlag(name) {
    return this.getFlags().find((flag) => flag.getName() === name)
  }
}
