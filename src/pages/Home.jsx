import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/landingPage/Hero'
import Products from '../components/landingPage/Products'
import Services from '../components/landingPage/Services'
import AboutUs from '../components/landingPage/AboutUs'
import Newsletter from '../components/landingPage/Newsletter'
import Footer from '../components/Footer'
import Team from '../components/landingPage/Team'

function Home() {
  return (
    <>
      <NavBar />
      <div className='flex flex-col items-center justify-center'>
        <Hero />
        <AboutUs />
        <Services />
        {/* <Products /> */}
        <Team />
        <Newsletter />
      </div>
      <Footer/>
    </>
  )
}

export default Home