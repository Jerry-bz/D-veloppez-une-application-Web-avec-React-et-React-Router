import React from 'react'
import './home.css'
import Banner from '../../components/banner/banner'
import bannerHome from '../../assets/banner/banner_home.png'


export default function Home() {
  return (
    <main>
     <Banner img={bannerHome} title="Chez vous, partout et ailleurs"/>
    </main>
  )
}
