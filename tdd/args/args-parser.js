import { Args } from './args'

export class ArgsParser {
  constructor() {}

  parse(command) {
    const [, value] = command.split(' ')
    return new Args('p', Number(value))
  }
}
