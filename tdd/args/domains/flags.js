import { Flag } from './flag'
import { BooleanFlag } from './flag/boolean'
import { IntegerFlag } from './flag/integer'

function createFlagFactory(flag, schemas) {
  const [name, value] = flag.split(' ')
  const schema = schemas.findSchema(name)

  switch (schema.getType()) {
    case 'boolean':
      return new BooleanFlag(name, true, schema.getDefaultValue())
    case 'integer':
      return new IntegerFlag(name, value, schema.getDefaultValue())
    default:
      return new Flag(name, value)
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
