import React from 'react'
import styles from './Footer.module.scss'

const Footer: React.FC = (props) => {
  return (
    <footer className={styles.root}>
      <ul className={styles.contact}>
        <li>
          <img src="/email.svg" />
          lorem@email.com
        </li>
        <li>
          <img src="/discord.svg" />
          LoremIpsum#1234
        </li>
      </ul>
    </footer>
  )
}

export default Footer
