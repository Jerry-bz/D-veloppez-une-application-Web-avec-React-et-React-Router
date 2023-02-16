import React from 'react'
import dataAbout from "../../data/dataAbout.json"
import Banner from '../../components/banner/banner'
import bannerAbout from '../../assets/banner/banner_about.png'
import './about.css'
import Collapse from '../../components/collapse/collapse'

/**
 * Affiche la page A propos
 * @component - About
 */

export default function About() {
  return (
    <main>
      <Banner img={bannerAbout} />
      <section className="about-section">
        {dataAbout.map(element => <Collapse key={element.id} title={element.id} description={element.description} />)}
      </section>
    </main>
  )
}

