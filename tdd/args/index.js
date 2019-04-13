export class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  parse(command) {
    const [, ...flags] = command.split('-')
    const existence = flags.map((flag) => {
      const [name, value] = flag.split(' ')
      return { name, value }
    })
    return this.schema
      .map(({ alias, defaultValue }) => ({
        [alias]: existence.some((flag) => flag.name === alias) || defaultValue,
      }))
      .reduce((a, b) => ({ ...a, ...b }), {})
  }
}
