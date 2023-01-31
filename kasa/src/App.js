import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Housing from './pages/housing/housing';
import Error from './pages/error/error';
import About from './pages/about/about';
import Header from './components/header/header';
import Footer from './components/footer/footer';


export default function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/housing' element={<Housing />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
    </>
  )
}

