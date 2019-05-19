import compact from 'lodash/compact'

import { Arg } from './arg'
import { Args } from './args'
import { Schemas } from './schemas'

export class ArgsParser {
  #schemas
  constructor(schemas) {
    this.#schemas = new Schemas(schemas)
  }

  parse(command) {
    const args = compact(command.split('-')).map((arg) => {
      const [name, value] = arg.split(' ')
      const schema = this.#schemas.findSchema(name)

      if (!schema) {
        throw new Error('Not recognized flag: -a')
      }

      const parsedValue =
        schema.type === 'number' ? Number(value) : String(value)
      return new Arg(name, parsedValue || schema.value)
    })

    return new Args(args)
  }
}
