import React from 'react'
import './home.css'
import Banner from '../../components/banner/banner'
import bannerHome from '../../assets/banner/banner_home.png'
import Cards from '../../components/cards/cards'

/**
 * Affiche la page Accueil
 * @component - Home
 */

export default function Home() {
  return (
    <main>
     <Banner img={bannerHome} title={true}/>
     <Cards />
    </main>
  )
}

