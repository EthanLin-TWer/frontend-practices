import { Flags } from './domains/flags'
import { Schemas } from './domains/schemas'

export class ArgsParser {
  constructor(schemas) {
    this.schemas = new Schemas(schemas)
  }

  parse(command) {
    const [, ...flags] = command.split('-')
    const args = new Flags(flags)
    return this.schemas.value
      .map((schema) => {
        // this.schemas.findSchema()
        const flag = args.findFlag(schema.getAlias())
        // TODO: [Linesh][2019-04-13] hard-coded boolean case here
        const value = flag ? true : schema.getDefaultValue()
        return {
          [schema.getAlias()]: value,
        }
      })
      .reduce((a, b) => ({ ...a, ...b }), {})
  }
}
