import { asArray } from './utils'

export class Args {
  #args
  constructor(args) {
    this.#args = asArray(args)
  }

  getValue(argName) {
    // TODO: [Linesh][2019-05-17] re-implement with high-performance key-value
    const found = this.#args.find((arg) => arg.getName() === argName)
    return found.getValue()
  }
}
