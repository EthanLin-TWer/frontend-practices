const flagNames = {
  l: 'log',
  p: 'port',
}

const defaultValues = {
  p: 8080,
}
export class CommandLine {
  constructor(commands) {
    this.commands = commands
  }

  parse() {
    const [, flag] = this.commands.split('-')
    return { [flagNames[flag]]: defaultValues[flag] || true }
  }
}
