function checkExtent(array: unknown[]): number {
  if (Array.isArray(array[0])) {
    return checkExtent(array[0]) + 1
  }

  return 1
}

type Map = (map: Function) => JSX.Element

function deepMap<Array extends unknown[]>(
  originalArray: Array,
  elementMap: (value: unknown) => JSX.Element,
  ...maps: Map[]
) {
  const intMaps = maps.length + 1

  if (checkExtent(originalArray) !== intMaps) {
    throw new Error('Number of nested arrays doesnt equal to number of map functions')
  }

  let resultMap = (array: unknown[]): JSX.Element[] => {
    return array.map(elementMap)
  }

  for (let i = maps.length - 1; i < 0; i--) {
    const map = maps[i]

    resultMap = (array) => {
      if (Array.isArray(array)) {
        return array.map((subArray) => map(resultMap.bind(null, subArray)))
      }
      
      throw new Error('Provided array is invalid')
    }
  }

  return resultMap(originalArray)
}

export default deepMap
