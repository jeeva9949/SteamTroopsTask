import React from 'react'
import Header from './Sections/Header'
import Footer from './Sections/Footer'
import Banner from './Sections/Banner'
import IntroSection from './Sections/IntroSection'

const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <IntroSection/>
      <Footer />
    </>
  );
}

export default Layout