import React from 'react'
import styles from 'styles/index.module.scss'

import hero from 'public/hero.jpg'
import InternalImage from 'components/UI/InternalImage'
import Header from 'components/Layout/Header'
import Navigation from 'components/Layout/Navigation'
import Content from 'components/Layout/Content'
import Footer from 'components/Layout/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Header className={styles.header}>
        <InternalImage className={styles.hero} image={hero} />
        <Navigation
          className={styles.navigation}
          breakpoints={{ mobile: 400, fixed: 500 }}
        />
      </Header>
      <Content>
      </Content>
      <Footer />
    </>
  )
}

export default Home
