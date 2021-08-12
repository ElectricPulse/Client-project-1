import React from 'react'
import styles from './Review.module.scss'

import InternalImage from 'components/UI/InternalImage'

export interface Review {
  title: string
  text: string
  image: any
}

interface Props {
  review: Review
}

const Review: React.FC<Props> = ({ review }) => {
  return (
    <li className={styles.root} key={Math.random()}>
      <InternalImage
        className={styles.image}
        layout="aspect"
        image={review.image}
        aspectRatio="1/1"
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{review.title}</h3>
        <p className={styles.text}>{review.text}</p>
      </div>
    </li>
  )
}

export default Review
