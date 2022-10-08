import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">ATA</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/imwolfi" className="footer__social-link" target="_blank">
                    <i className='uil uil-instagram'></i>
                </a>

                <a href="https://twitter.com/atakmrn" className="footer__social-link" target="_blank">
                    <i className='uil uil-twitter'></i>
                </a>

                <a href="https://www.linkedin.com/in/atakamran/" className="footer__social-link" target="_blank">
                    <i className='uil uil-linkedin'></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Ata Kamran. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer