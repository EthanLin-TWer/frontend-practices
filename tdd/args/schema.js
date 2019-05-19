export class Schema {
  #flagName
  #value

  constructor(flagName, value) {
    this.#flagName = flagName
    this.#value = value
  }

  get name() {
    return this.#flagName
  }

  get value() {
    return this.#value
  }
}
