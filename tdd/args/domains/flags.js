import { Flag } from './flag'

export class Flags {
  constructor(flags) {
    this._value = flags.map((flag) => {
      const [name, value] = flag.split(' ')
      return new Flag(name, value)
    })
  }

  findFlag(alias) {
    return this._value.find((flag) => flag.getName() === alias)
  }
}
