import React from 'react'
import styles from './Quote.module.scss'

const Quote: React.FC = () => {
  return (
    <section className={styles.root}>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        temporibus exercitationem et voluptatum quaerat corporis culpa velit ea,
        ullam fugiat amet provident officiis deserunt dolores, ducimus eius
        natus? Autem, debitis!
      </p>
    </section>
  )
}

export default Quote
