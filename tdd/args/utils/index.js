import isArray from 'lodash/isArray'

export const asArray = (arrayOrElement) => {
  if (isArray(arrayOrElement)) {
    return arrayOrElement
  }

  return [arrayOrElement]
}
