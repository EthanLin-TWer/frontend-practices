export class Schema {
  #flagName
  #value

  constructor(flagName, value) {
    this.#flagName = flagName
    this.#value = value
  }

  get value() {
    return this.#value
  }
}
