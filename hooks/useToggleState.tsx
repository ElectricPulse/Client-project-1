import { useState } from 'react'
const useToggleState = (initialValue: boolean) => {
  const [state, setState] = useState(initialValue)

  function toggleState() {
      setState((state) => !state)
  }

  return [state, toggleState, setState] as const
}

export default useToggleState
