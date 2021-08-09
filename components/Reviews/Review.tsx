import React from 'react'
import styles from './Review.module.scss'

import InternalImage from 'components/UI/InternalImage'
import profileImage from 'public/profile.png'

export interface Review {
  title: string
  text: string
}

interface Props {
  review: Review
}

const Review: React.FC<Props> = ({ review }) => {
  return (
    <li className={styles.root} key={Math.random()}>
      <InternalImage image={profileImage} className={styles.profile} />
      <div>
        <h3 className={styles.title}>{review.title}</h3>
        <p className={styles.text}>{review.text}</p>
      </div>
    </li>
  )
}

export default Review
