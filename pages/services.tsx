import React from 'react'
import styles from './services.module.scss'

import Header from 'components/Layout/Header'
import Navigation from 'components/Layout/Navigation'
import Content from 'components/Layout/Content'
import Footer from 'components/Layout/Footer'
import Packages from 'components/Packages/Packages'

const Home: React.FC = () => {
  return (
    <>
      <Header className={styles.header}>
        <Navigation
          className={styles.navigation}
          breakpoints={{ mobile: 890, fixed: 500 }}
        />
      </Header>
      <Content>
        <section className={styles.preface}>
          <h1 className={styles['preface__heading']}>Packages</h1>
          <p className={styles['preface__text']}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
            veritatis quasi! Maiores aliquam rem voluptates, consequatur
            voluptate ad pariatur doloremque! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Aliquam, veritatis quasi! Maiores
            aliquam rem voluptates, consequatur voluptate ad pariatur
            doloremque!
          </p>
        </section>
        <Packages />
      </Content>
      <Footer />
    </>
  )
}

export default Home
