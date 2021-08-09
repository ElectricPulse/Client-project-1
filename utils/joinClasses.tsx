export default function joinClasses(
  ...classes: (string | undefined | false)[]
): string {
  const filteredClasses = classes.filter((className) => {
    if (className === undefined || className === false) return false
    return true
  })
  
  return filteredClasses.join(' ')
}

