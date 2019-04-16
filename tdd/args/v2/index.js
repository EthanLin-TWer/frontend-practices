import { Argument } from './domains/arg'
import { createArgsFactory } from './domains/factory'

export class ArgsParser {
  constructor(schema) {
    this.schema = schema
  }

  parse(argumentList) {
    const [, ...args] = argumentList.split('-')
    const argsObject = args.map((arg) => {
      const [name, value] = arg.split(' ')
      const type = this.schema.findFlag(name).getType()

      return createArgsFactory(name, type, value)
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
