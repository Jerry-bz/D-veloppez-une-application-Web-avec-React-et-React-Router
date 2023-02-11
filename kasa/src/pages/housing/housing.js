import React from 'react'
import datas from '../../data/data.json'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/collapse/collapse'
import Slideshow from '../../components/slideshow/slideshow';
import './housing.css'
import logoStarGrey from '../../assets/logo/logo_star_grey.svg'
import logoStarRed from '../../assets/logo/logo_star_red.svg'
import Error from '../error/error';




/**
 * Affiche la page Logement
 * @component - Housing
 */

 export default function Housing () {
  const {idHousing} = useParams();
  const housing = idHousing && datas.find(housing => housing.id === idHousing)
  const rating = [1,2,3,4,5]
 



  return (
    housing ? 
     <main className='housing'>
    <Slideshow location = {housing}  />
    <div className='housing-description'>
        <h3>{housing.title}</h3>
        <div className='housing-profil'>
          <p className='housing-name'>{housing.host.name}</p>
          <img className='housing-photo' src={housing.host.picture} alt="user"></img>
        </div>
    </div>
    <p className='housing-localisation'>{housing.location}</p>
    <div className='housing-informations'>
      <div className='housing-tags'>
        {housing.tags.map(map => <span className='housing-tag' key={map}>{map}</span>)}
      </div>
      <div className='housing-rating'>
      {rating.map((star) => {
        return star <=  housing.rating ? <img key={star} src={logoStarRed} alt="logo-star"></img> : <img key={star} src={logoStarGrey} alt="logo-star"></img>
      })}
      </div>
    </div>
      <div className='housing-collapse'>
        <Collapse title="Description" description={housing.description} />
        <Collapse title="Equipements" description={housing.equipments} />
      </div>
    </main>
     : <Error />
    )
}

