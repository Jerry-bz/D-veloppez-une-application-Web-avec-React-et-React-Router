import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'



/**
 * Affiche la page Erreur si le chemin de l'url est incorrect
 * @component - Error
 */

export default function Error() {
  return (
    <main>
      <section className="error">
        <div className='error-404'>404</div>
        <div className='error-message'>Oups! La page que vous demandez n'existe pas</div>
        <Link to={"/"} class='error-backHome'>Retournez à la page d'acceuil</Link>
      </section>
    </main>
  )
}
