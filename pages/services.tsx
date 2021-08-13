import React from 'react'
import styles from './services.module.scss'

import Header from 'components/Layout/Header'
import Navigation from 'components/Layout/Navigation'
import Content from 'components/Layout/Content'
import Footer from 'components/Layout/Footer'

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
       
      </Content>
      <Footer />
    </>
  )
}

export default Home
