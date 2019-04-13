export class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  parse(command) {
    const [, flag = ''] = command.split('-')
    const { alias, defaultValue } = this.schema[0]
    const [l] = flag.split(' ')
    return { [alias]: l ? true : defaultValue }
  }
}
