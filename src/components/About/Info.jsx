import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
          <i className="uil uil-briefcase-alt about__icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">4 + projects</span>
        </div>
        <div className="about__box">
          <i className="uil uil-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">2 Years +</span>
        </div>
        <div className="about__box">
          <i className="uil uil-briefcase-alt about__icon"></i>
            <h3 className="about__title">Working on</h3>
            <span className="about__subtitle">Web Design and Game Dev</span>
        </div>
    </div>
  )
}

export default Info