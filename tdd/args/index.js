import { Flags } from './domains/flags'
import { Schemas } from './domains/schemas'

export class ArgsParser {
  constructor(schemas) {
    this.schemas = new Schemas(schemas)
  }

  parse(command) {
    const [, ...flags] = command.split('-')
    const args = new Flags(flags, this.schemas)
    return this.schemas.value
      .map((schema) => {
        const flagFound = args.findFlag(schema.getAlias())
        const value = flagFound.getValue() || schema.getDefaultValue()

        return { [schema.getAlias()]: value }
      })
      .reduce((a, b) => ({ ...a, ...b }), {})
  }
}
