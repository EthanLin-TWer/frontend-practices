import { Argument } from './domains/arg'
import { Args } from './domains/args'

export class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  parse(argumentList) {
    const [, ...rest] = argumentList.split('-')
    const args = new Args(rest, this.schema)

    return this.schema.getFlags().map((flag) => {
      const arg = args.findArg(flag.getName())
      return new Argument(
        flag.getName(),
        arg.getValue() || flag.getDefaultValue()
      )
    })
  }
}
