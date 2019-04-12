const flagNames = {
  l: 'log',
}
export class CommandLine {
  constructor(commands) {
    this.commands = commands
  }

  parse() {
    const [, flag] = this.commands.split('-')
    return { [flagNames[flag]]: true }
  }
}
