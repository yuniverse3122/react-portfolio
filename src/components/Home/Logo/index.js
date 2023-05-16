import { useRef } from 'react'

// import LogoS from '../../../assets/images/logo-s.png'
import LogoD from '../../../assets/images/D_logo.svg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()

  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoD}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="2000pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        ></g>
      </svg>
    </div>
  )
}

export default Logo
