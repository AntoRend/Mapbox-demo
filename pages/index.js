import Head from 'next/head'
import Link from 'next/link'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import styles from '../styles/Home.module.scss'

import Heatmap from '../components/heatmap'
import DynamicLayer from '../components/dynamicLayer'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Mapbox Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css'
          rel='stylesheet'/>
      </Head>

      <div className={styles.main}>
        <h1>Mapbox Demo</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link href="/layers">Multiple layers</Link>
          </li>
          <li>
            <Link href="/heatmap">Heatmap</Link>
          </li>
        </ul>
      </div>

      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}
