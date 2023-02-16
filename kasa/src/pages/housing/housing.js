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

export default function Housing() {
  const { idHousing } = useParams();

  // Vérifie l'id et récupère les datas
  const housing = idHousing && datas.find(housing => housing.id === idHousing)
  const rating = [1, 2, 3, 4, 5]

  // Si l'id est vraie on affiche la page Housing sinon on affiche la page erreur
  return (
    housing ?
      <main className='housing'>
        <Slideshow location={housing} />
        <div className='housing-informations'>
          <div className='housing-informations-location'>
            <h3>{housing.title}</h3>
            <div className='housing-localisation'>{housing.location}</div>
            <div className='housing-tags'>
              {housing.tags.map(map => <span className='housing-tag' key={map}>{map}</span>)}
            </div>
          </div>
          <div className='housing-informations-profil'>
            <div className='housing-profil'>
              <div className='housing-name'>{housing.host.name}</div>
              <img className='housing-photo' src={housing.host.picture} alt="user"></img>
            </div>
            <div className='housing-rating'>
              {rating.map((star) => {
                return star <= housing.rating ? <img className='housing-rating-star' key={star} src={logoStarRed} alt="logo-star"></img> : <img className='housing-rating-star' key={star} src={logoStarGrey} alt="logo-star"></img>
              })}
            </div>
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

