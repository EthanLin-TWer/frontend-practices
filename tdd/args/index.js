import { Command } from './commands/base-command'
import { DirectoryCommand } from './commands/directory-command'
import { LogCommand } from './commands/log-command'
import { PortCommand } from './commands/port-command'

function createCommand(alias, flag) {
  switch (alias) {
    case 'l':
      return new LogCommand(flag)
    case 'd':
      return new DirectoryCommand(flag)
    case 'p':
      return new PortCommand(flag)
    default:
      return new Command(flag)
  }
}

export class CommandLine {
  constructor(commands) {
    this.commands = commands
  }

  parse() {
    const [, flag] = this.commands.split('-')
    const [alias] = flag.split(' ')

    return createCommand(alias, flag).parse()
  }
}
