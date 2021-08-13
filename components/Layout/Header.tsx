import React from 'react'
import styles from './Header.module.scss'

import joinClasses from './../../utils/joinClasses';

interface Props {
  className?: string
}

const Header: React.FC<Props> = (props) => {
  return <header className={joinClasses(props.className, styles.root)}>{props.children}</header>
}

export default Header
