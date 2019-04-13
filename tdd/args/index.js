export class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  getDefaultValue(alias) {
    return this.schema.find((flag) => flag.alias === alias).defaultValue
  }

  parse(command) {
    const [, flag = ''] = command.split('-')
    const alias = this.schema[0].alias
    const [l] = flag.split(' ')
    return { [alias]: l ? true : this.getDefaultValue(alias) }
  }
}
