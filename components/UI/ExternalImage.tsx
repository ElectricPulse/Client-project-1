import React from 'react'
import styles from './Image.module.scss'

import Image from 'next/image'
import { buildUrl } from 'cloudinary-build-url'

type Props = {
  imageName: string
  aspectRatio?: string
}

const ExternalImage: React.FC<Props> = (props) => {
  const imageUrl = buildUrl(props.imageName, {
    cloud: {
      cloudName: 'dpki8ezpl',
    },
  })

  return (
    <div className={styles.root} style={{ aspectRatio: props.aspectRatio }}>
      <Image src={imageUrl} layout="fill" className={styles.image} />
    </div>
  )
}

export default ExternalImage
