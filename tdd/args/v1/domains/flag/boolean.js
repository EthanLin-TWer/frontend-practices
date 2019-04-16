import { Flag } from './index'

export class BooleanFlag extends Flag {
  constructor(name, value, defaultValue) {
    super(name, true, defaultValue)
  }
}
