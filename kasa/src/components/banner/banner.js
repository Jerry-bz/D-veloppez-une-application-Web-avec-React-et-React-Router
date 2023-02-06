import '../banner/banner.css'

/**
 * Affiche la Bannière dans la page Home et A propos
 * @component - Banner
 * @param {boolean} [title] - Ajoute texte si title est vrai
 * @param {property} img - Ajoute l'image de la bannière
 */

 export default function Banner({title,img}) {
    return (
      <main>

        {title ?
          
          <section className='home-banner'>
            <p className='home-banner-title'>
              <div>Chez vous,</div>
              <div>partout et ailleurs</div>
            </p> 
            <img className='home-banner-img' src={img} alt="banner-home"></img>
          </section> :
         
          <section className='about-banner'>
            <img className='about-banner-img' src={img} alt="banner-home"></img>
          </section>

        }

      </main>
    )
  }
   
  
  