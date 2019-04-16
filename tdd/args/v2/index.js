import { Argument } from './domains/arg'

export class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  parse(argumentList) {
    const [, args = ''] = argumentList.split('-')
    const [name, value] = args.split(' ')

    return this.schema.getFlags().map((flag) => {
      return new Argument(
        flag.getName(),
        flag.getName() === name ? Number(value) : flag.getDefaultValue()
      )
    })
  }
}
