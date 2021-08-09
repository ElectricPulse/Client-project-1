export default function split<T>(
  array: T[],
  chunkLength: number
): T[][] | never {
  if (array.length % chunkLength !== 0) {
    throw new Error(
      `Could not split array of length ${array.length} by ${chunkLength}`
    )
  }

  const chunks: T[][] = []

  for (let i = 0; i !== array.length; i += chunkLength) {
    chunks.push(array.slice(i, i + chunkLength)!)
  }

  return chunks
}
