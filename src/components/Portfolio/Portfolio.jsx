import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio section"  id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My projects</span>

        <div className="portfolio__container container grid">
            <a target="_blank" href='https://atakamran.com/shoetryon/'>
                <div className="portfolio__box">
                    <img className='portfolio__image' src="https://techcrunch.com/wp-content/uploads/2022/06/amazon-try-on.jpg?w=730" alt="TryOn Shoe" />
                    <h3 className="portfolio__title"> AR | Shoe tryon </h3>
                </div>
            </a>
            <a target="_blank" href='https://atakamran.com/baby-wolves/'>
                <div className="portfolio__box">
                    <img className='portfolio__image' src="https://s6.uupload.ir/files/0qc90fx_kd6o.png" alt="TryOn Shoe" />
                    <h3 className="portfolio__title"> NFT | Baby Wolves </h3>
                </div>
            </a>
        </div>
    </section>
  )
}

export default Portfolio