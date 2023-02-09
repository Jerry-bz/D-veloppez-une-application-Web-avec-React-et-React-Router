import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Housing from './pages/housing/housing';
import Error from './pages/error/error';
import About from './pages/about/about';
import Header from './components/header/header';
import Footer from './components/footer/footer';

/**
 * Mise en place de la navigation de l'application
 * @component - App
 */

export default function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/housing/:idHousing' element={<Housing />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
    </>
  )
}

