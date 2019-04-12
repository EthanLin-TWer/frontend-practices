import { Command } from './base-command'

export class LogCommand extends Command {
  constructor(args) {
    super(args)
  }

  parse() {
    return {
      log: this.value,
    }
  }

  get defaultValue() {
    return true
  }
}
