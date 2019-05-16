export class Arg {
  #name
  #value
  constructor(name, value) {
    this.#name = name
    this.#value = value
  }

  getValue() {
    return this.#value
  }
}
