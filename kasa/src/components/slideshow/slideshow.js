import './slideshow.css'
import logoArrowLeft from '../../assets/logo/logo_arrow_left.svg'
import logoArrowRight from '../../assets/logo/logo_arrow_right.svg'

export default function Slideshow() {
    return(
        <section className='slideshow'>
            <img className='slideshow-img' src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="location" />
            <img className='slideshow-arrowLeft' src={logoArrowLeft} alt='' />
            <img className='slideshow-arrowRight' src={logoArrowRight} alt='' />
        </section>
    )
}