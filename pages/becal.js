import Head from 'next/head'
import { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const becal = () => {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  useEffect(() => {

  })

  return(
    <h1>ola k ase</h1>
  )
  
}

export default becal