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
    const [, ...commands] = this.commands.split('-')
    return commands
      .map((command) => {
        const [alias] = command.split(' ')
        return createCommand(alias, command).parse()
      })
      .reduce((a, b) => ({ ...a, ...b }), {})
  }
}
