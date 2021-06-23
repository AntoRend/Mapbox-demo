import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

import HeatMap from '../components/heatmap'

// import localData from '../public/files/test.geojson'
// import localData from '../public/files/polygon.geojson'
import localData from '../public/files/trees.geojson'
// import localData from '../public/files/last_test2.geojson'
// import localData from '../public/files/last_test.geojson'



mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const dataMap = {
  container:'componentMap',
  withContainer: 80,
  heigthContainer: 70,
  styleMap: 'mapbox://styles/mapbox/dark-v10',
  center: [-79.999732, 40.4374],
  zoom: 11,
  addSourceName: 'trees',
  typeSource: 'geojson',
  dataSource: localData,
  propertyLayer: 'dbh',
  typeLayer: 'exponential',
  colorOne: 'rgb(1,108,89)',
  colorTwo: 'rgb(28,144,153)',
  colorThree: 'rgb(103,169,207)',
  colorFour: 'rgb(166,189,219)',
  colorFive: 'rgb(208,209,230)',
  colorSix: 'rgb(236,222,239)',
  colorSeven: 'rgba(236,222,239,0)',
  backgroundImgPopUp: 'https://www.toroto.mx/images/HOME-IPAD-LANDSCAPE-08.png?ec3d0de58b88e0488823c68551598c46',
  htmlPopUp: ''
}

export default function heatmMapComponent() {

  return (
    <div className={styles.container}>
      <Head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
  
      <HeatMap
      dataMap={dataMap}/>
        
      
    </div>
  )
}
