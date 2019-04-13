import { Flag } from './domains/flag'
import { Schemas } from './domains/schemas'

export class ArgsParser {
  constructor(schemas) {
    this.schemas = new Schemas(schemas)
  }

  parse(command) {
    const [, ...flags] = command.split('-')
    const args = flags.map((flag) => {
      const [name, value] = flag.split(' ')
      return new Flag(name, value)
    })
    return this.schemas.value
      .map((schema) => ({
        [schema.getAlias()]:
          args.some((flag) => flag.getName() === schema.getAlias()) ||
          schema.getDefaultValue(),
      }))
      .reduce((a, b) => ({ ...a, ...b }), {})
  }
}
