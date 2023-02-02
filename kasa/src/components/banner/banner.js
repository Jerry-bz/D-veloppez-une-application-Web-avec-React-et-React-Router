import '../banner/banner.css'

export default function banner({title,img}) {
    return (
      <main>
        <section className='home-banner'>
          <h1 className='home-banner-title'>{title}</h1>
          <img className='home-banner-img' src={img} alt="banner-home"></img>
        </section>
      </main>
    )
  }
  