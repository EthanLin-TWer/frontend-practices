const flagNames = {
  l: 'log',
}
export class CommandLine {
  constructor() {}

  parse(string) {
    const [, flag] = string.split('-')
    return { [flagNames[flag]]: true }
  }
}
