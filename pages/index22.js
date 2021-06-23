import Head from 'next/head'
import Link from 'next/link'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import styles from '../styles/Home.module.scss'

import Heatmap from '../components/heatmap'
import DynamicLayer from '../components/dynamicLayer'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

export default function Home() {
  const handleClick = btnSelected => {
    const containerContents = document.getElementsByClassName('map_content')
    const btnMenuMaps = document.getElementsByClassName('btn-menu-map')
    
    for (let i = 0; i<containerContents.length; i++) {
      if (parseInt(btnSelected) === i) {
        containerContents.item(i).classList.remove('hidden')
        btnMenuMaps.item(i).classList.add('activated')
      } else {
        containerContents.item(i).classList.add('hidden')
        btnMenuMaps.item(i).classList.remove('activated')
      }
    }
  }

  return (
    <div >
      <Head>
        <title>Mapbox Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css'
          rel='stylesheet'/>
      </Head>

      <div className="">
        <h1>Mapbox Demo</h1>
      </div>

      <section className="maps_container">
        <div className="maps_container_menu">
          <div className="maps_container_menu">
            <button 
              onClick={() => handleClick('0')} 
              className="btn-menu-map activated">
              <span className='fab fa-pagelines'/>
              Heatmap
            </button>
          </div>
          <div className="maps_container_menu">
            <button 
              onClick={() => handleClick('1')} 
              className="btn-menu-map">
             <span className='fab fa-pagelines'/>
             Style Map
            </button>
          </div>
          <div className="maps_container_menu">
            <button 
              onClick={() => handleClick('2')} 
              className="btn-menu-map">
             <span className='fab fa-pagelines'/>
             Dynamic Label Map
            </button>
          </div>
        </div>

        <div className="maps_container_content">
          <div className="map_content content_heatmap" id="content_heatmap">
              <Heatmap />
          </div>
          <div className="map_content content_styleMap hidden" id="content_styleMap">
              styleMap
          </div>
          <div className="map_content content_labelMap hidden" id="content_labelMap">
              <DynamicLayer />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}
