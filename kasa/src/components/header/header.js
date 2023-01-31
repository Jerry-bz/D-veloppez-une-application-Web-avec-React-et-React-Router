import React from 'react'
import { Link } from 'react-router-dom'
import logoRed from '../../assets/logo_kasa_red.svg'
import './header.css'


export default function Header() {
    return (
        <header className='header'>
            <img className='header-logo' src={logoRed} alt="logo Kasa"></img>
               <nav className='header-nav'>
                    <Link to='/'>Acceuil</Link>
                    <Link to='/about'>A propos</Link>
               </nav>
        </header>
    )
}
