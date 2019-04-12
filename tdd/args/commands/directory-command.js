import { Command } from './base-command'

export class DirectoryCommand extends Command {
  constructor(args) {
    super(args)
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
