import './banner.css'

/**
 * Affiche la Bannière dans la page Home et A propos
 * @component - Banner
 * @param {boolean} [title] - Ajoute texte si title est vrai
 * @param {property} img - Ajoute l'image de la bannière
 */

 export default function Banner({title,img}) {
    return (

        <>

        {title ?
    
          <section className='home-banner'>
              <div className='home-banner-title'>
                <div>Chez vous,</div>
                <div>partout et ailleurs</div>
              </div> 
              <img className='home-banner-img' src={img} alt="banner"></img>
            </section> :
         
            <section className='about-banner'>
              <img className='about-banner-img' src={img} alt="banner"></img>
            </section>

        }

        </>


      
    )
  }
   
  
  