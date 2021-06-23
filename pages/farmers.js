import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const farmersMap = () => {

  return(
    <>
      <Head>
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css'
          rel='stylesheet'/>
      </Head>
      <figure className="logo-container">
        <img src="https://www.toroto.mx/img/landing/logos/LOGO-BLANCO.png" alt="logo"/>
      </figure>
      
    </>
  )
}

export default farmersMap
