import { Arg } from './arg'

export class ArgsParser {
  #aSchema
  constructor(aSchema) {
    this.#aSchema = aSchema
  }

  parse(command) {
    const [, value] = command.split(' ')
    return new Arg('p', Number(value) || this.#aSchema.value)
  }
}
