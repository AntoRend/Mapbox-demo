import { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

const dynamicLayer = () => {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  useEffect(() => {
    setPageIsMounted(true)

    const map = new mapboxgl.Map({
      container: 'dynamicLayer-map',
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/mapbox/satellite-v9',
      zoom: 15,
      center: [-99.12766, 19.42847]
    });

      // Wait until the map has finished loading.
      // Add a custom vector tileset source. This tileset contains
    map.on('load', function () {
      // point features representing museums. Each feature contains
      // three properties. For example:
      // {
      //     alt_name: "Museo Arqueologico",
      //     name: "Museo Inka",
      //     tourism: "museum"
      // }
      map.addSource('museums', {
        type: 'vector',
        url: 'mapbox://mapbox.2opop9hr'
      });
      map.addLayer({
        'id': 'museums',
        'type': 'circle',
        'source': 'museums',
        'layout': {
          // Make the layer visible by default.
          'visibility': 'visible'
        },
        'paint': {
          'circle-radius': 8,
          'circle-color': 'rgba(55,148,179,1)'
        },
        'source-layer': 'museum-cusco'
      });

      // Add the Mapbox Terrain v2 vector tileset. Read more about
      // the structure of data in this tileset in the documentation:
      // https://docs.mapbox.com/vector-tiles/reference/mapbox-terrain-v2/
      map.addSource('contours', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2'
      });
      map.addLayer({
        'id': 'contours',
        'type': 'line',
        'source': 'contours',
        'source-layer': 'contour',
        'layout': {
          // Make the layer visible by default.
          'visibility': 'visible',
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          // 'line-color': '#877b59',
          'line-color': '#fff',
          'line-width': 2
        }
      });
    });

      // After the last frame rendered before the map enters an "idle" state.
    map.on('idle', function () {
      // If these two layers have been added to the style,
      // add the toggle buttons.
      if (map.getLayer('contours') && map.getLayer('museums')) {
        // Enumerate ids of the layers.
        var toggleableLayerIds = ['contours', 'museums'];
        // Set up the corresponding toggle button for each layer.
        for (var i = 0; i < toggleableLayerIds.length; i++) {
          var id = toggleableLayerIds[i];
          if (!document.getElementById(id)) {
            // Create a link.
            var link = document.createElement('a');
            link.id = id;
            link.href = '#';
            link.textContent = id;
            link.className = 'active';
            // Show or hide layer when the toggle is clicked.
            link.onclick = function (e) {
              var clickedLayer = this.textContent;
              e.preventDefault();
              e.stopPropagation();
                
              var visibility = map.getLayoutProperty(
                clickedLayer,
                'visibility'
              );
                
              // Toggle layer visibility by changing the layout object's visibility property.
              if (visibility === 'visible') {
                map.setLayoutProperty(
                clickedLayer,
                'visibility',
                'none'
                );
                this.className = '';
              } else {
                this.className = 'active';
                map.setLayoutProperty(
                clickedLayer,
                'visibility',
                'visible'
                );
              }
            };
            var layers = document.getElementById('dynamicLayer-menu');
            layers.appendChild(link);
          }
        }
      }
      });

    
  }, [])

  return(
    <>
      <nav id="dynamicLayer-menu"></nav>
      <div style={{ width: `100%`, height: `100vh` }} id="dynamicLayer-map"></div>

    </>
  )
}

export default dynamicLayer
