import Head from 'next/head'
import { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

// import logoAzul from '../public/images/logo-azul.png'
// https://www.toroto.mx/img/landing/logos/LOGO-BLANCO.png
// https://admin.toroto.mx/toroto/img/companies/hugo_1600819436.png
import DynamicLayer from '../components/dynamicLayer'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const dynamicLayer = () => {

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
      <DynamicLayer />
    </>
  )
}

export default dynamicLayer
