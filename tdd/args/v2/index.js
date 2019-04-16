import { Argument } from './domains/arg'

export class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  parse(argumentList) {
    const [, ...args] = argumentList.split('-')
    const argsObject = args.map((arg) => {
      const [name, value] = arg.split(' ')
      return new Argument(name, Number(value))
    })

    return this.schema.getFlags().map((flag) => {
      // TODO: [Linesh][2019-04-17] null object
      const arg =
        argsObject.find((one) => one.getName() === flag.getName()) ||
        new Argument('', null)
      return new Argument(
        flag.getName(),
        arg.getValue() || flag.getDefaultValue()
      )
    })
  }
}
