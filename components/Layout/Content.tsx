import React from 'react'
import styles from './Content.module.scss'

const Content: React.FC = (props) => {
  return <main className={styles.content}>{props.children}</main>
}

export default Content
