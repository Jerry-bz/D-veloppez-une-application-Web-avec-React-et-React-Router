import React from 'react'
import Banner from '../../components/banner/banner'
import bannerAbout from '../../assets/banner/banner_about.png'
import './about.css'

/**
 * Affiche la page A propos
 * @component - About
 */

export default function About() {
  return (
    <main>
      <Banner img={bannerAbout}/>
  </main>
  )
}
