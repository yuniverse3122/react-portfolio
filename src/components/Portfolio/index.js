import React from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

import PortfolioAssets from '../../Data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
                style={{ opacity: 0.9 }}
              />

              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  Click Me!
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15} // for delay? test this
          />
        </h1>
        <div>{renderPortfolio(PortfolioAssets.portfolio)}</div>
      </div>
      <div className="wavesPort">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,600 C 0,600 0,200 0,200 C 85.63998625901755,231.17347990381313 171.2799725180351,262.34695980762626 237,263 C 302.7200274819649,263.65304019237374 348.52009618687737,233.78564067330814 410,213 C 471.47990381312263,192.21435932669186 548.6396427344556,180.51047749914122 627,165 C 705.3603572655444,149.48952250085878 784.9213328753005,130.1724493301271 847,138 C 909.0786671246995,145.8275506698729 953.6750257643421,180.79972518035038 1024,197 C 1094.324974235658,213.20027481964962 1190.378564067331,210.62864994847135 1264,208 C 1337.621435932669,205.37135005152865 1388.8107179663346,202.68567502576434 1440,200 C 1440,200 1440,600 1440,600 Z"
            stroke="none"
            stroke-width="0"
            fill="#0693e3"
            fill-opacity="0.53"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          />
          <path
            d="M 0,600 C 0,600 0,400 0,400 C 53.040192373754735,438.19306080384746 106.08038474750947,476.3861216076949 176,469 C 245.91961525249053,461.6138783923051 332.71865338371686,408.6485743730677 420,384 C 507.28134661628314,359.3514256269323 595.0450017176229,363.0195809000343 652,385 C 708.9549982823771,406.9804190999657 735.1013397457918,447.27310202679496 795,460 C 854.8986602542082,472.72689797320504 948.54963929921,457.888010992786 1026,437 C 1103.45036070079,416.111989007214 1164.7001030573688,389.1748540020611 1231,382 C 1297.2998969426312,374.8251459979389 1368.6499484713156,387.41257299896944 1440,400 C 1440,400 1440,600 1440,600 Z"
            stroke="none"
            stroke-width="0"
            fill="#0693e3"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-1"
          />
        </svg>
      </div>

      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Portfolio
