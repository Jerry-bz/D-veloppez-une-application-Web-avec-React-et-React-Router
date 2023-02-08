import React from 'react'
import datas from '../../data/data.json'
import './home.css'
import Banner from '../../components/banner/banner'
import bannerHome from '../../assets/banner/banner_home.png'
import Card from '../../components/card/card'


/**
 * Affiche la page Accueil
 * @component - Home
 */

export default function Home() {
  return (
    <main>
     <Banner img={bannerHome} title={true}/>
     <section className='cards'>
        {datas.map((data) =>
            <Card link={'housing/' + data.id} img={data.cover} title={data.title} key={data.id}/>
        )}
     </section>
    </main>
  )
}

