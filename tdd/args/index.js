export class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  getDefaultValue(alias) {
    return this.schema.find((flag) => flag.alias === alias).defaultValue
  }

  parse() {
    // const [,] = command.split('-')
    const alias = this.schema[0].alias
    return { [alias]: this.getDefaultValue(alias) }
  }
}
