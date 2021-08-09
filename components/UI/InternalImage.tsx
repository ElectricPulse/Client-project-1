import React from 'react'
import styles from './Image.module.scss'

import Image from 'next/image'
import joinClasses from 'utils/joinClasses'

interface Props {
  image: any
  aspectRatio?: string
  className?: string
}

const InternalImage: React.FC<Props> = (props) => {
  return (
    <div
      className={joinClasses(styles.root, props.className)}
      style={{ aspectRatio: props.aspectRatio }}
    >
      <Image src={props.image} layout="fill" className={styles.image} />
    </div>
  )
}

export default InternalImage
