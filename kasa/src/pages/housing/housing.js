import React from 'react'
import { useParams } from 'react-router-dom'

/**
 * Affiche la page Logement
 * @component - Housing
 */

export default function Housing() {
   const {id} = useParams();


  return (
    <div>Housing:{id}</div>
  )
}
