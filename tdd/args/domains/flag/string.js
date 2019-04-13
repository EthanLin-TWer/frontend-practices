import { Flag } from './index'

export class StringFlag extends Flag {
  constructor(name, value, defaultValue) {
    super(name, value, defaultValue)
  }

  format() {
    return this._value.toString()
  }
}
