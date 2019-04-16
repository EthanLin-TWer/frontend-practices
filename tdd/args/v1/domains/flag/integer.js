import { Flag } from './index'

export class IntegerFlag extends Flag {
  constructor(name, value, defaultValue) {
    super(name, value, defaultValue)
  }

  format() {
    return Number(this._value)
  }
}