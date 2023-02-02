import React from 'react'
import './home.css'
import banner from '../../assets/banner/banner_home.png'


export default function Home() {
  return (
    <main>
      <section className='home-banner'>
        <h1 className='home-banner-title'>Chez vous, partout et ailleurs</h1>
        <img className='home-banner-img' src={banner} alt="banner-home"></img>
      </section>
    </main>
  )
}
