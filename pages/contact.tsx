import React from 'react'
import styles from './contact.module.scss'

import profile from 'public/profile.png'
import hero from 'public/hero.jpg'
import Image from 'next/image'
import Button from 'components/UI/Button'
import Header from 'components/Layout/Header'
import Navigation from 'components/Layout/Navigation'
import Content from 'components/Layout/Content'
import Footer from 'components/Layout/Footer'
import Quote from 'components/Quote/Quote'
import Reviews from 'components/Reviews/Reviews'

const Home: React.FC = () => {
  return (
    <>
      <Header className={styles.header}>
        <Navigation
          className={styles.navigation}
          breakpoints={{ mobile: 890, fixed: 500 }}
        />
        <Image className={styles.hero} src={hero} layout="fill" />
        <Button href="/services" className={styles.cta}>
          See our packages!
        </Button>
      </Header>
      <Content>
        <Quote />
        <div className={styles['section-break']} />

        <Reviews
          reviews={Array(3).fill({
            title: 'Lorem ipsum',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni cum cumque quod. Quis consectetur impedit exercitationem alias sequi doloribus recusandae qui nesciunt, ea animi vero obcaecati explicabo veritatis tempore nostrum.',
            image: profile,
          })}
        />
      </Content>
      <Footer />
    </>
  )
}

export default Home
