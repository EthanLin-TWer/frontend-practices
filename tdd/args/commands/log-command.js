import { Command } from './base-command'

export class LogCommand extends Command {
  constructor(value) {
    super(value)
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
