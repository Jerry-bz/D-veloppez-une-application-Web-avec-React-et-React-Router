import { Link } from 'react-router-dom'
import './card.css'


/**
 * Composent qui permet d'afficher la location correspondante
 * @Component - Card
 * @property {string} link - redirection de la page
 * @property {string} img - source de l'image 
 * @property {string} title - titre de la location
 */

export default function Card({link,img,title}) {
  return(
    <article className='card'>
      <Link to={link}>
          <img className='card-img' src={img} alt={title}/>
          <h3 className='card-title'>{title}</h3>
      </Link>
    </article>
  )
}