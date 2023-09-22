// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgClassName = isDarkTheme
        ? 'about-navbar-bg-dark'
        : 'about-navbar-bg-light'

      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClassName = isDarkTheme
        ? 'about-navbar-text-light'
        : 'about-navbar-text-dark'

      return (
        <div className={`about-bg-container ${aboutBgClassName}`}>
          <Navbar />
          <div className="about-container">
            <img src={aboutImageUrl} alt="about" className="about-image" />
            <h1 className={`about-heading ${aboutTextClassName}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
