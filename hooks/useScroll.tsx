import { useState, useEffect } from 'react'

const useScroll = (scrollOffset: number) => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY

    setScrolled(() => {
      if (offset > scrollOffset) return true
      return false
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return scrolled
}

export default useScroll
