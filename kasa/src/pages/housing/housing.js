import React from 'react'
// import datas from '../../data/data.json'
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/slideshow/slideshow';


/**
 * Affiche la page Logement
 * @component - Housing
 */

export default function Housing() {
  const {idHousing} = useParams();
  

  return (
    <Slideshow />
  )
}
