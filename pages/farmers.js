import { useEffect, useState } from 'react'
import Head from 'next/head'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const farmersMap = () => {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  useEffect(() => { 
    setPageIsMounted(true)
    const map = new mapboxgl.Map({
      // Html container for the map
      container: 'farmers-map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [-89.260282647632238,18.783432289174453],
      zoom: 5
    })
  })

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
      <div style={{ width: `100%`, height: `100vh` }} id={'farmers-map'}>
      </div>
    </>
  )
}

export default farmersMap
