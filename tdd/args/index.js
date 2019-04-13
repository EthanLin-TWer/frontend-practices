import { Flag } from './domains/flag'

export class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  parse(command) {
    const [, ...flags] = command.split('-')
    const args = flags.map((flag) => new Flag(flag))
    return this.schema
      .map(({ alias, defaultValue }) => ({
        [alias]: args.some((flag) => flag.name === alias) || defaultValue,
      }))
      .reduce((a, b) => ({ ...a, ...b }), {})
  }
}
