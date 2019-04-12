const flags = [
  { alias: 'l', name: 'log', defaultValue: true },
  { alias: 'p', name: 'port', defaultValue: 8080 },
]

const defaultValues = {
  l: true,
  p: 8080,
}
export class CommandLine {
  constructor(commands) {
    this.commands = commands
  }

  getFlagName(alias) {
    return flags.find((flag) => flag.alias === alias).name
  }

  parse() {
    const [, flag] = this.commands.split('-')
    return {
      [this.getFlagName(flag)]: defaultValues[flag],
    }
  }
}
