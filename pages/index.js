import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

import data from '../public/files/last_test3.geojson'


mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

export default function Home() {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  useEffect(() => {
    setPageIsMounted(true)
      const map = new mapboxgl.Map({
        container: "mapboxContainer",
        style: "mapbox://styles/mapbox/satellite-streets-v11",
        center: [-92.2891903, 15.1570307], // starting position
        zoom: 15, // starting zoom
        pitch: 30
      });

      // Show an alert if the browser does not support Mapbox GL
    if (!mapboxgl.supported()) {
      alert('Your browser does not support Mapbox GL');
    }
    
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl());

      // Add geolocation button
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );

      map.on('load', function () {
        map.addSource('some id', {
          type: 'geojson',
          data: data
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
  
        <div style={{ width: '100%', height: '30rem' }} id="mapboxContainer">
        </div>
      
      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}
