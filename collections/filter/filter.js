export const chooseEven = (collection) => {
  return collection.filter((element) => element % 2 === 0)
}

export const chooseMultiplesOfThree = (collection) => {
  return collection.filter((element) => element % 3 === 0)
}

export const chooseNoRepeatNumber = (collection) => {
  return collection.reduce((result, next) => {
    if (!result.includes(next)) {
      return result.concat(next)
    }
    return result
  }, [])
}

export const groupingCount = (collection) => {
  const uniqNumbers = collection.reduce((result, next) => {
    if (!result.includes(next)) {
      return result.concat(next)
    }
    return result
  }, [])

  return uniqNumbers
    .map((number) => ({
      [number]: collection.filter((element) => element === number).length,
    }))
    .reduce((a, b) => ({ ...a, ...b }), {})
}

export const chooseCommonElements = (collection_a, collection_b) => {
  return collection_a.filter((element) => collection_b.includes(element))
}

export const chooseNoCommonElements = (collection_a, collection_b) => {
  return [collection_a, collection_b]
}

export const chooseDivisibleInteger = (collection_a, collection_b) => {
  return [collection_a, collection_b]
}
