import React from 'react'
import styles from './Navigation.module.scss'

import NavigationMobile from './NavigationMobile'
import NavigationDesktop from './NavigationDesktop'

import useMediaQuery from 'hooks/useMediaQuery'
import useScroll from 'hooks/useScroll'
import joinClasses from 'utils/joinClasses'

interface Props {
  className?: string
  breakpoints: {
    mobile: number
    fixed: number
  }
}

const Header: React.FC<Props> = ({ className, breakpoints }) => {
  const smallScreen = useMediaQuery(breakpoints.mobile + 'px')
  const scrolled = useScroll(breakpoints.fixed)

  const navigationClass = joinClasses(
    styles.navigation,
    scrolled && styles['navigation--fixed'],
    className
  )

  return smallScreen ? (
    <NavigationMobile className={navigationClass} />
  ) : (
    <NavigationDesktop className={navigationClass} />
  )
}

export default Header
