import React from 'react'

interface Props {
  className?: string
}

const Header: React.FC<Props> = (props) => {
  return <header className={props.className}>{props.children}</header>
}

export default Header
