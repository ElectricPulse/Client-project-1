import React, { MouseEventHandler } from 'react'
import styles from './Button.module.scss'

import Link from 'next/link'
import joinClasses from 'utils/joinClasses'

type LinkType = {
  href: string
}

type ButtonType = {
  onClick: MouseEventHandler<HTMLButtonElement>
}

type Props = {
  className?: string
} & (LinkType | ButtonType)

const Button: React.FC<Props> = (props) => {
  if ('href' in props) {
    return (
      <Link href={props.href}>
        <a className={joinClasses(props.className, styles.link)}>{props.children}</a>
      </Link>
    )
  }

  if ('onClick' in props) {
    return (
      <button className={joinClasses(props.className)} onClick={props.onClick}>
        {props.children}
      </button>
    )
  }

  return <></>
}

export default Button
