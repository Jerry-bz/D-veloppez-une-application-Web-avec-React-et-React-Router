import React from 'react'
import logoWhite from '../../assets/logo/logo_kasa_white.svg'
import logoCopyRight from '../../assets/logo/logo_copyright.svg'
import './footer.css'


/**
 * Affiche le Footer à toutes les pages
 * @component - Footer
 */

export default function Footer() {
  return (
    <footer className='footer'>
        <img className='footer-logo' src={logoWhite} alt="logo kasa"></img>
        <img className='footer-copyright' src={logoCopyRight} alt="logo footer"></img>
    </footer>
  )
}
