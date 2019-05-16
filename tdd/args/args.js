import { asArray } from './utils'

export class Args {
  #args
  constructor(args) {
    this.#args = asArray(args)
  }

  getValue() {
    return this.#args[0].getValue()
  }
}
