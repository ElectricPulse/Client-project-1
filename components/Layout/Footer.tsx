import React from 'react'
import styles from './Footer.module.scss'

const Footer: React.FC = (props) => {
  return <footer className={styles.footer}>{props.children}</footer>
}

export default Footer
