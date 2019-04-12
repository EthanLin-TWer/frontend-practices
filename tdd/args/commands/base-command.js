export class Command {
  constructor(value) {
    this.value = value || this.defaultValue
  }

  get defaultValue() {
    throw new Error('SubClass responsibility')
  }
}
