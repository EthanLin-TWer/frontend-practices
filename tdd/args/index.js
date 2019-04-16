import { Flags } from './domains/flags'
import { Schemas } from './domains/schemas'

export class ArgsParser {
  constructor(schemas) {
    this.schemas = new Schemas(schemas)
  }

  parse(command) {
    const [, ...flags] = command.split('-')
    const args = new Flags(flags, this.schemas)

    return toObject(
      this.schemas.value.map((schema) => {
        const flag = args.findFlag(schema.getAlias())
        const value = flag.getValue() || schema.getDefaultValue()

        return { [schema.getAlias()]: value }
      })
    )
  }
}

function toObject(array) {
  return array.reduce(
    (result, keyValuePair) => ({ ...result, ...keyValuePair }),
    {}
  )
}
