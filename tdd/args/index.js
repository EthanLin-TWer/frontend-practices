const flags = [
  { alias: 'l', name: 'log', defaultValue: true },
  { alias: 'p', name: 'port', defaultValue: 8080 },
]

export class CommandLine {
  constructor(commands) {
    this.commands = commands
  }

  getFlagName(alias) {
    return flags.find((flag) => flag.alias === alias).name
  }

  getDefaultValue(alias) {
    return flags.find((flag) => flag.alias === alias).defaultValue
  }

  parse() {
    const [, flag] = this.commands.split('-')
    const [alias, value] = flag.split(' ')
    return {
      [this.getFlagName(alias)]: Number(value) || this.getDefaultValue(alias),
    }
  }
}
