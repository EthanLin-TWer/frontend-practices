import { DirectoryCommand } from './commands/directory-command'
import { LoggingCommand } from './commands/logging-command'
import { NoopCommand } from './commands/noop-command'
import { PortCommand } from './commands/port-command'

function createCommand(command) {
  const [alias, value] = command.split(' ')
  switch (alias) {
    case 'l':
      return new LoggingCommand(value)
    case 'd':
      return new DirectoryCommand(value)
    case 'p':
      return new PortCommand(value)
    default:
      return new NoopCommand(value, alias)
  }
}

export class CommandLine {
  constructor(commands) {
    this.commands = commands
  }

  parse() {
    const [, ...commands] = this.commands.split('-')
    return toObject(commands.map((command) => createCommand(command).parse()))
  }
}

function toObject(array) {
  return array.reduce(
    (result, keyValuePair) => ({ ...result, ...keyValuePair }),
    {}
  )
}
