export class Args {
  #args

  constructor(args) {
    this.#args = args
  }

  getValue() {
    return this.#args.getValue()
  }
}
