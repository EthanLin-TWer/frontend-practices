import { createArgsFactory } from '../factory'
import { NullArgument } from './null-arg'

export class Args {
  constructor(args, schema) {
    this.args = args.map((arg) => {
      const [name, value] = arg.split(' ')
      const flag = schema.findFlag(name)

      // TODO: [Linesh][2019-04-17] remove this check to somewhere else?
      if (!flag) {
        throw new Error(`Not recognized option: -${name}`)
      }

      return createArgsFactory(name, flag.getType(), value)
    })
  }

  findArg(name) {
    return this.args.find((arg) => arg.getName() === name) || new NullArgument()
  }

  getValue() {
    return this.args
  }
}
