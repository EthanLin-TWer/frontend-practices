import { Argument } from './arg'

export class NullArgument extends Argument {
  constructor() {
    super(null, null)
  }
}
