import { Args } from '../args'

export class ArgsParser {
  #schemas

  constructor(schemas) {
    this.#schemas = schemas
  }

  parse() {
    return new Args()
  }
}
