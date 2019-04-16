import { Argument } from './domains/arg'

export class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  parse() {
    const flag = this.schema.getFlags()[0]
    return [new Argument(flag.getName(), flag.getDefaultValue())]
  }
}
