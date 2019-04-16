import { Argument } from './domains/arg'

export class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  parse(args) {
    const [, name] = args.split('-')
    return [new Argument(name, true)]
  }
}
