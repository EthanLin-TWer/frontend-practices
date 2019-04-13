import { Flag } from './domains/flag'
import { Schema } from './domains/schema'

export class ArgsParser {
  constructor(schemas) {
    this.schemas = schemas.map((schema) => new Schema(schema))
  }

  parse(command) {
    const [, ...flags] = command.split('-')
    const args = flags.map((flag) => new Flag(flag))
    return this.schemas
      .map((schema) => ({
        [schema.alias]:
          args.some((flag) => flag.name === schema.alias) ||
          schema.defaultValue,
      }))
      .reduce((a, b) => ({ ...a, ...b }), {})
  }
}
