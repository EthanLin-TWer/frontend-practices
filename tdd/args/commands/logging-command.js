import { Command } from './base-command'

export class LoggingCommand extends Command {
  constructor(value) {
    super(value)
  }

  parse() {
    return {
      logging: this.value,
    }
  }

  get defaultValue() {
    return true
  }
}
