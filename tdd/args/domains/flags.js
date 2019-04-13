import { BooleanFlag } from './flag/boolean'
import { IntegerFlag } from './flag/integer'
import { StringFlag } from './flag/string'

function createFlagFactory(flag, schemas) {
  const [name, value] = flag.split(' ')
  const schema = schemas.findSchema(name)

  switch (schema.getType()) {
    case 'boolean':
      return new BooleanFlag(name, true, schema.getDefaultValue())
    case 'integer':
      return new IntegerFlag(name, value, schema.getDefaultValue())
    case 'string':
      return new StringFlag(name, value, schema.getDefaultValue())
    default:
      throw new Error(`option -w can not be parsed.`)
  }
}

export class Flags {
  constructor(flags, schemas) {
    this._value = flags.map((flag) => createFlagFactory(flag, schemas))
  }

  findFlag(alias) {
    return this._value.find((flag) => flag.getName() === alias)
  }
}
