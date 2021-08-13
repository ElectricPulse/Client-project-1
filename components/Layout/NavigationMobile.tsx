import React, { MouseEventHandler } from 'react'
import styles from './NavigationMobile.module.scss'
import joinClasses from 'utils/joinClasses'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faTimes } from '@fortawesome/free-solid-svg-icons'
import useToggleState from 'hooks/useToggleState'

interface Props {
  className?: string
}

const NavigationMobile: React.FC<Props> = (props) => {
  const [sidebarVis, toggleSidebarVis] = useToggleState(false)

  return (
    <>
      <Sidebar vis={sidebarVis} onClose={toggleSidebarVis} />

      <div className={joinClasses(styles.root, props.className)}>
        <button className={styles['button__sidebar']} onClick={toggleSidebarVis}>
          <FontAwesomeIcon icon={faGripHorizontal} />
        </button>
        <div></div>
      </div>
    </>
  )
}

export default NavigationMobile

const Sidebar: React.FC<{ onClose: MouseEventHandler; vis: boolean }> = ({
  onClose,
  vis,
}) => {
  const sidebarVisClass = vis
    ? styles['sidebar--visible']
    : styles['sidebar--hidden']
  return (
    <div className={joinClasses(sidebarVisClass, styles.sidebar)}>
      <button onClick={onClose} className={styles['sidebar__close']}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <nav className={styles['sidebar__links']}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact us</Link>
        <Link href="/about">Meet the team</Link>
      </nav>
    </div>
  )
}
