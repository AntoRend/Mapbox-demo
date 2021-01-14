import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

// import localData from '../public/files/test.geojson'
// import localData from '../public/files/polygon.geojson'
import localData from '../public/files/last_test3.geojson'
// import localData from '../public/files/last_test2.geojson'
// import localData from '../public/files/last_test.geojson'
// const localData = require('json-loader!../public/files/last_test3.geojson')


mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

export default function Home() {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  useEffect(() => {
    setPageIsMounted(true)
      const map = new mapboxgl.Map({
        // Html container for the map
        container: 'myMap',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-92.107970096021816, 17.870719256479013],
        zoom: 10
      });

      // console.log(localData)

      // Show an alert if the browser does not support Mapbox GL
    if (!mapboxgl.supported()) {
      alert('Your browser does not support Mapbox GL');
    }
    
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl());

      // Add geolocation user button
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );

      map.on('load', function () {
        // Add a new source from our GeoJSON data and. GL-JS will
        // add the point_count property to your source data.
        map.addSource('myMap', {
        type: 'geojson',
        data: localData,
        });

        

        map.addLayer({
          'id': 'myMap',
          'type': 'fill',
          'source': 'myMap',
          'layout': {},
          'paint': {
          'fill-color': '#fff',
          'fill-opacity': 0.8
          }
          });

        });

}, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
  
        <div style={{ width: '100%', height: '30rem' }} id="myMap">
        </div>
      
      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}
