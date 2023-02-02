import React from 'react'
import banner from '../../assets/banner/banner_about.png'
import './about.css'

export default function About() {
  return (
    <main>
    <section className='about-banner'>
      <img className='about-banner-img' src={banner} alt="banner-home"></img>
    </section>
  </main>
  )
}
