import React, { useState } from 'react'
import styles from './NavigationMobile.module.scss'
import joinClasses from 'utils/joinClasses';

import useToggleState from 'hooks/useToggleState'

interface Props {
  className?: string
}

const NavigationMobile: React.FC<Props> = (props) => {
  const [menuVis, toggleMenuVis] = useToggleState(false)

  return <div className={joinClasses(styles.root, props.className)}></div>
}

export default NavigationMobile
