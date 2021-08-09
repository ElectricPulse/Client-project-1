import React from 'react'
import styles from './Package.module.scss'

export interface PackageType {
  priceMin: number
  priceMax: number
  modules: string[]
  commands?: number
}

interface Props {
  package: PackageType
  index: number
}

const Package: React.FC<Props> = ({ index, package: info }) => {
  return (
    <li className={styles.root} key={Math.random()}>
      <h3>Tier {index}</h3>
      {info.commands && <h4>Max number of commands: {info.commands}</h4>}
      <h4>
        {info.modules.length} Modules: {info.modules.join(', ')}
      </h4>
      <h4>
        Price: {info.priceMin} - {info.priceMax}
      </h4>
    </li>
  )
}

export default Package
