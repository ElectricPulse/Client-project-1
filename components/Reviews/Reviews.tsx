import React from 'react'
import styles from './Reviews.module.scss'

import Review, { Review as ReviewType } from './Review'

interface Review {
  text: string
}

interface Props {
  reviews: ReviewType[]
}

const Reviews: React.FC<Props> = ({ reviews }) => {
  return (
    <section className={styles.root}>
      <ul className={styles.list}>
        {reviews.map((review) => (
          <Review key={Math.random()} review={review} />
        ))}
      </ul>
    </section>
  )
}

export default Reviews
