import Head from 'next/head'

import styles from '../styles/Home.module.css'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

import BaseMap from './components/heatMap/index'

// import localData from '../public/files/test.geojson'
// import localData from '../public/files/polygon.geojson'
import localData from '../public/files/last_test3.geojson'
// import localData from '../public/files/last_test2.geojson'
// import localData from '../public/files/last_test.geojson'



mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Mapbox Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <div className="">
        <h1>Mapbox Demo</h1>
      </div>
      <h2>Heatmap Component</h2>
      <BaseMap/>
        
      
      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}
