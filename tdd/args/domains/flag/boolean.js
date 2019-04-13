import { Flag } from './index'

export class BooleanFlag extends Flag {
  constructor(name) {
    super(name, true)
  }
}
