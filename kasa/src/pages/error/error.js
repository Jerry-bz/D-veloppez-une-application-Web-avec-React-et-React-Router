import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <main>
      <section className="error">
        <p className='error-404'>404</p>
        <p className='error-message'>Oups! La page que vous demandez n'existe pas</p>
        <Link to={"/"} class='error-backHome'>Retournez à la page d'acceuil</Link>
      </section>
    </main>
  )
}
