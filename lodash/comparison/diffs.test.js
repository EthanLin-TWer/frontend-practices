import { compareDiffs } from './diffs'

it.skip('should compare diffs of two data set', () => {
  const one = {
    details: [
      {
        product: 'id-1',
        subProducts: [
          { subProduct: 'id-11', price: 20 },
          { subProduct: 'id-12', price: 30 },
          { subProduct: 'id-13', price: 40 },
        ],
      },
      {
        product: 'id-2',
        subProducts: [
          { subProduct: 'id-21', price: 200 },
          { subProduct: 'id-22', price: 300 },
          { subProduct: 'id-23', price: 400 },
        ],
      },
    ],
  }
  const another = {
    result: [
      { groupKey: 'product/id-1/sub/id-11', price: 25 },
      { groupKey: 'product/id-1/sub/id-12', price: 34 },
      { groupKey: 'product/id-1/sub/id-13', price: 38 },
      { groupKey: 'product/id-2/sub/id-21', price: 212 },
      { groupKey: 'product/id-2/sub/id-22', price: 288 },
      { groupKey: 'product/id-3/sub/id-23', price: 450 },
    ],
  }

  const result = compareDiffs(one, another)

  expect(result).toEqual({
    'product/id-1/sub/id-11': { diffs: -5 },
    'product/id-1/sub/id-12': { diffs: -4 },
    'product/id-1/sub/id-13': { diffs: 2 },
    'product/id-2/sub/id-21': { diffs: -12 },
    'product/id-2/sub/id-22': { diffs: 12 },
    'product/id-2/sub/id-23': { diffs: -50 },
  })
})
