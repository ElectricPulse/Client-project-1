import React from 'react'
import styles from './NavigationDesktop.module.scss'

import Link from 'next/link'
import joinClasses from 'utils/joinClasses'

interface Props {
  className?: string
}

const NavigationDesktop: React.FC<Props> = (props) => {
  return (
    <div className={joinClasses(styles.root, props.className)}>
      <div></div>
      <nav className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact us</Link>
        <Link href="/about">Meet the team</Link>
      </nav>
    </div>
  )
}

export default NavigationDesktop
