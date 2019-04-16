import { Argument } from './arg'
import { createArgsFactory } from './factory'

export class Args {
  constructor(args, schema) {
    this.args = args.map((arg) => {
      const [name, value] = arg.split(' ')
      const type = schema.findFlag(name).getType()

      return createArgsFactory(name, type, value)
    })
  }

  findArg(name) {
    // TODO: [Linesh][2019-04-17] null object
    return (
      this.args.find((arg) => arg.getName() === name) || new Argument('', null)
    )
  }

  getValue() {
    return this.args
  }
}
