import { useState, useEffect } from 'react'

const useMediaQuery = (_query: string) => {
  const query = `(max-width: ${_query})`
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    setMatches(media.matches)

    const listener = () => setMatches(media.matches)

    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [])

  return matches
}

export default useMediaQuery
