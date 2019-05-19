import compact from 'lodash/compact'

import { Arg } from './arg'
import { Args } from './args'

export class ArgsParser {
  #aSchema
  constructor(aSchema) {
    this.#aSchema = aSchema
  }

  parse(command) {
    const args = compact(command.split('-')).map((arg) => {
      const [name, value] = arg.split(' ')
      return new Arg(name, Number(value) || this.#aSchema.value)
    })

    return new Args(args)
  }
}
