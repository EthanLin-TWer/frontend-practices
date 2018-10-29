import { applyCalculationToGroup } from './apply-calculation-to-group'

it.skip('should apply calculation to different groups according to key', () => {
  const groupMapping = {
    652: 'education',
    653: 'transportation',
    654: 'meals',
  }
  const data = [
    { expense: 5, code: 652 },
    { expense: 10, code: 653 },
    { expense: 15, code: 654 },
    { expense: 20, code: 653 },
    { expense: 25, code: 654 },
    { expense: 30, code: 999 },
  ]

  const result = applyCalculationToGroup(data, groupMapping)

  expect(result).toEqual({
    education: 5,
    transportation: 30,
    meals: 40,
    others: 30,
  })
})
