// Write your code here

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const HomeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const HomeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const HomeTextClassName = isDarkTheme
        ? 'home-navbar-text-light'
        : 'home-navbar-text-dark'

      return (
        <div className={`home-bg-container ${HomeBgClassName}`}>
          <Navbar />
          <div className="home-responsive-container">
            <div className="home-container">
              <img src={HomeImageUrl} alt="home" className="home-image" />
              <h1 className={`home-heading ${HomeTextClassName}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
