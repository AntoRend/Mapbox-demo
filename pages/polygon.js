import { useEffect, useState } from 'react'
import Head from 'next/head'

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

// import data from '../public/files/ADA_StaGertrudis.json'
import data from '../public/files/map.geojson'
import adas from '../public/files/adas.geojson'
import json_ADPCorredorTamiahua_5 from '../components/mapbox/ADPCorredorTamiahua_5'
import ADAS_3 from '../components/mapbox/ADAS_3'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const polygon = (props) => {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  useEffect(() => { 
    setPageIsMounted(true)
    const map = new mapboxgl.Map({
      // Html container for the map
      container: 'polygon-map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-89.260282647632238,18.783432289174453],
      zoom: 15
    });

    map.on('load', function () {
      // Add a data source containing GeoJSON data.
      map.addSource('maine', {
        'type': 'geojson',
        'data': adas
      });
  
      map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine', // reference the data source
        'layout': {},
        'paint': {
        'fill-color': '#0080ff', // blue color fill
        'fill-opacity': 0.5
        }
      });
        // Add a black outline around the polygon.
      map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'maine',
        'layout': {},
        'paint': {
        'line-color': '#000',
        'line-width': 3
        }
      });


      map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        function (error, image) {
        if (error) throw error;
        map.addImage('custom-marker', image);
        // Add a GeoJSON source with 2 points
        map.addSource('points', {
        'type': 'geojson',
        'data': data
        });
         
        // Add a symbol layer
        map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
        'icon-image': 'custom-marker',
        // get the title name from the source's "title" property
        'text-field': ['get', 'title'],
        'text-font': [
        'Open Sans Semibold',
        'Arial Unicode MS Bold'
        ],
        'text-offset': [0, 1.25],
        'text-anchor': 'top'
        }
        });
        }
        );


  })
})

  return(
    <>
    <Head>
    <link
      href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css'
      rel='stylesheet'/>
  </Head>
    <div style={{ width: `100%`, height: `100vh` }} id={'polygon-map'}>

    </div>
    </>
  )
  
}

export default polygon