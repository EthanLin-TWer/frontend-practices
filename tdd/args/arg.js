export class Arg {
  #name
  #value
  constructor(name, value) {
    this.#name = name
    this.#value = value
  }

  getName() {
    return this.#name
  }

  getValue() {
    return this.#value
  }
}
