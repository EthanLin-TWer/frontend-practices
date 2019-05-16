import { Arg } from './arg'
import { Args } from './args'

export class ArgsParser {
  #aSchema
  constructor(aSchema) {
    this.#aSchema = aSchema
  }

  parse(command) {
    const [, value] = command.split(' ')
    const arg = new Arg('p', Number(value) || this.#aSchema.value)
    return new Args(arg)
  }
}
