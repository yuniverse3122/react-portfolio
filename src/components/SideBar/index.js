import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoDdark from '../../assets/images/D_logo_dark.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const SideBar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img className="logo-svg" src={LogoDdark} alt="logo" />
    </Link>
    <h2 className="subTitle">yuniversal</h2>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/yuniversalgiant/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/yuniverse3122"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.tiktok.com/@davidstevenyun"
        >
          <FontAwesomeIcon icon={faTiktok} color="#4d4d4e"></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/yuniversalgiant"
        >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  </div>
)

export default SideBar
