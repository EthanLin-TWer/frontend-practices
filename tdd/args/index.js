import { LogCommand } from './commands/log-command'
import { PortCommand } from './commands/port-command'

export class CommandLine {
  constructor(commands) {
    this.commands = commands
  }

  parse() {
    const [, flag] = this.commands.split('-')
    const [alias] = flag.split(' ')

    if (alias === 'l') {
      return new LogCommand(flag).parse()
    }
    if (alias === 'p') {
      return new PortCommand(flag).parse()
    }

    return {}
  }
}
