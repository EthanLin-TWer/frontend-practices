function findAllPossibleTwoWordsCombination() {
  return []
}

export function isAnagramToWordDocument(words) {
  return !words.some((word) => word.includes('i'))
}

export const anagrams = () => {
  const combinations = findAllPossibleTwoWordsCombination()
  return combinations.filter(isAnagramToWordDocument)
}
