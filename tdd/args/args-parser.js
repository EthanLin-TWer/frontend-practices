import { Args } from './args'

export class ArgsParser {
  #aSchema
  constructor(aSchema) {
    this.#aSchema = aSchema
  }

  parse(command) {
    const [, value] = command.split(' ')
    return new Args('p', Number(value) || this.#aSchema.value)
  }
}
