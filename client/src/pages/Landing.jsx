import styled from "styled-components"
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="Jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span> Tracking </span> App
          </h1>
          <p>
            I'm baby semiotics slow-carb literally, enamel pin whatever fit fixie DIY crucifix listicle before they sold out. Lo-fi chartreuse leggings photo booth blog whatever tacos fashion axe letterpress mumblecore single-origin coffee sartorial. Gentrify ugh health goth kickstarter locavore, scenester four loko 3 wolf moon. Beard master cleanse XOXO thundercats brunch gatekeep hot chicken mlkshk crucifix street art lyft vegan 3 wolf moon gorpcore.
          </p>

          <Link to='/register' className="btn register-link">Register</Link>
          <Link to='/login' className="btn register-link">Login</Link>
        </div>
        <img src={main} alt="Job Hunt" />
      </div>
    </Wrapper>
  )
}


export default Landing