import React from 'react'
import styles from './Image.module.scss'

import Image from 'next/image'
import joinClasses from 'utils/joinClasses'

interface Aspect {
  layout: 'aspect'
  aspectRatio: string
}

interface Responsive {
  layout: 'responsive'
}

type Props = {
  className?: string
  image: any
} & (Aspect | Responsive)

const InternalImage: React.FC<Props> = (props) => {
  switch (props.layout) {
    case 'aspect':
      return (
        <div
          className={joinClasses(styles['aspect__root'], props.className)}
          style={{ aspectRatio: props.aspectRatio }}
        >
          <Image src={props.image} layout="fill" className={styles['aspect__image']} />
        </div>
      )

    case 'responsive':
      return (
        <div className={props.className}>
          <Image src={props.image} layout="responsive" />
        </div>
      )

    default:
      return <></>
  }
}

export default InternalImage
