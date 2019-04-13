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
        const flag = args.findFlag(schema.getAlias())
        return {
          [schema.getAlias()]: flag
            ? flag.getValue()
            : schema.getDefaultValue(),
        }
      })
      .reduce((a, b) => ({ ...a, ...b }), {})
  }
}
