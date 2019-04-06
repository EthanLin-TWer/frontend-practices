function findAllPossibleTwoWordsCombination() {
  return []
}

function isAnagramToWordDocument() {
  return true
}

export const anagrams = () => {
  const combinations = findAllPossibleTwoWordsCombination()
  return combinations.filter(isAnagramToWordDocument)
}
