import React from 'react'
import styles from './Packages.module.scss'

import Package, { PackageType } from './Package'

interface Props {
  title: string
  description: string
  packages: PackageType[]
}

const Packages: React.FC<Props> = (props) => {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>{props.title}</h1>
      <ul>
        {props.packages.map((info, index) => (
          <Package key={Math.random()} package={info} index={index} />
        ))}
      </ul>
    </section>
  )
}

export default Packages
