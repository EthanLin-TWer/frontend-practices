import { Command } from './base-command'

export class PortCommand extends Command {
  constructor(args) {
    super(args)
  }

  parse() {
    return {
      port: Number(this.value),
    }
  }

  get defaultValue() {
    return 8080
  }
}
