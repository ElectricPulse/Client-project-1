import React from 'react'
import styles from './Quote.module.scss'

import joinClasses from 'utils/joinClasses'

const Quote: React.FC = () => {
  return (
    <section className={styles.root}>


      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora minus,
        temporibus delectus voluptatem eaque soluta.
      </p>
    </section>
  )
}

export default Quote
