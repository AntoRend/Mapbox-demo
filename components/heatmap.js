import { useEffect, useState } from 'react'


import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

import data from '../public/files/trees.geojson'

// external elements required
// container, styleMap, center, zoom, 


const heatMap = (props) => {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  useEffect(() => { 
    setPageIsMounted(true)
    const map = new mapboxgl.Map({
      // Html container for the map
      container: 'componentMap',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-79.999732, 40.4374],
      zoom: 11
    });

    map.on('load', function() {
          // data source added here
      map.addSource('trees', {
        type: 'geojson',
        data: data
      })

      // add heatmap layer here
      map.addLayer({
        id: `trees-heat`,
        type: 'heatmap',
        source: 'trees',
        maxzoom: 15,
        paint: {
          // increase weight as diameter breast height increases
          'heatmap-weight': {
            property: 'dbh',
            type: 'exponential',
            stops: [
              [1, 0],
              [62, 1]
            ]
          },
          // assign color values be applied to points depending on their density
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(236,222,239,0)',
            0.2, 'rgb(208,209,230)',
            0.4, 'rgb(166,189,219)',
            0.6, 'rgb(103,169,207)',
            0.8, 'rgb(1,108,89)'
          ],
          // increase radius as zoom increases
          'heatmap-radius': {
            stops: [
              [11, 15],
              [15, 20]
            ]
          },
          'heatmap-opacity': {
            default: 1,
            stops: [
              [14, 1],
              [15, 0]
            ]
          },
        }
      }, 'waterway-label')

      //add circle layer here  
      map.addLayer({
        id: `trees-point`,
        type: 'circle',
        source: 'trees',
        minzoom: 14,
        paint: {
          // increase the radius of the circle as the zoom level and dbh value increases
          'circle-radius': {
            property: 'dbh',
            type: 'exponential',
            stops: [
              [{ zoom: 15, value: 1 }, 5],
              [{ zoom: 15, value: 62 }, 10],
              [{ zoom: 22, value: 1 }, 20],
              [{ zoom: 22, value: 62 }, 50],
            ]
          },
          'circle-color': {
            property: 'dbh',
            type: 'exponential',
            stops: [
              [0, 'rgba(236,222,239,0)'],
              [10, 'rgb(236,222,239)'],
              [20, 'rgb(208,209,230)'],
              [30, 'rgb(166,189,219)'],
              [40, 'rgb(103,169,207)'],
              [50, 'rgb(28,144,153)'],
              [60, 'rgb(1,108,89)']
            ]
          },
          'circle-stroke-color': 'white',
          'circle-stroke-width': 1,
          'circle-opacity': {
            stops: [
              [14, 0],
              [15, 1]
            ]
          }
        }
      }, 'waterway-label');
      
      map.on('click', `trees-point`, function(e) {
        new mapboxgl.Popup()
          .setLngLat(e.features[0].geometry.coordinates)
          .setHTML(`
          <div className="popup__container" style="background-image: url('https://www.toroto.mx/images/HOME-IPAD-LANDSCAPE-08.png?ec3d0de58b88e0488823c68551598c46');">
            ' '
          </div>
          `)
          // .setHTML('<br><b>Diameter:</b> ' + e.features[0].properties.dbh)
          .addTo(map);
      });

    })
  
  })

  return(
    <div style={{ width: `100%`, height: `100vh` }} id={'componentMap'}>

    </div>
  )

}

export default heatMap