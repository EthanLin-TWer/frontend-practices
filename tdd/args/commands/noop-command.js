import { Command } from './base-command'

export class NoopCommand extends Command {
  constructor(value, alias) {
    super(value)
    this.alias = alias
  }

  parse() {
    // eslint-disable-next-line
    console.warn(`command -${this.alias} not recognized, skipping...`)

    return {}
  }

  get defaultValue() {
    return null
  }
}
