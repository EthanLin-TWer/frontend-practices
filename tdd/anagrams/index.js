function findAllPossibleTwoWordsCombination() {
  return []
}

export function isAnagramToWordDocument() {
  return true
}

export const anagrams = () => {
  const combinations = findAllPossibleTwoWordsCombination()
  return combinations.filter(isAnagramToWordDocument)
}
