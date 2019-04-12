import { Command } from './base-command'

export class DirectoryCommand extends Command {
  constructor(value) {
    super(value)
  }

  parse() {
    return {
      directory: this.value.toString(),
    }
  }

  get defaultValue() {
    return ''
  }
}
