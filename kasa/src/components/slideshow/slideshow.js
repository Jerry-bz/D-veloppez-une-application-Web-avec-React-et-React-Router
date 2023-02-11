import './slideshow.css'
import logoArrowLeft from '../../assets/logo/logo_arrow_left.svg'
import logoArrowRight from '../../assets/logo/logo_arrow_right.svg'
import { useState } from 'react'

export default function Slideshow({ location }) {

    const [index, setIndex] = useState(0)


    function slides(e) {
        if (e.target.classList.contains('slideshow-arrowLeft')) {

            index === 0 ? setIndex(location.pictures.length - 1) : setIndex(index - 1);

        }

        if (e.target.classList.contains('slideshow-arrowRight')) {

            index === location.pictures.length - 1 ? setIndex(0) : setIndex(index + 1)

        }

    }


    return (
        <section className='slideshow'>
            <img className='slideshow-img' src={location.pictures[index]} alt="location" />
            <img onClick={(e) => slides(e)} className='slideshow-arrowLeft' src={logoArrowLeft} alt='' />
            <img onClick={(e) => slides(e)} className='slideshow-arrowRight' src={logoArrowRight} alt='' />
            <p className='slideshow-page'>{index + 1} / {location.pictures.length} </p>
        </section>
    )
}