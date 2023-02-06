import { Link } from 'react-router-dom'
import datas from '../../data/data.json'
import './cards.css'

/**
 * Affichent les locations dans la page Home
 * @component - Cards
 */

export default function Cards() {
    return(
        <section className='cards'>
        {datas.map((data) => <article key={data.id} className='card'>
          <Link to={'housing/' + data.id}>
          <img className='card-img' src={data.cover} alt={data.title}/>
          <h3 className='card-title'>{data.title}</h3>
          </Link>
        </article>)}
     </section>
    )
}