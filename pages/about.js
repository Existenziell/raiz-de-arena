import Head from 'next/head'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { initializeMap } from '../lib/map/initializeMap'
import { addDataLayer } from '../lib/map/addDataLayer'
import { COORDS, ZOOM } from '../lib/config'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

const About = ({ i18n }) => {

  const router = useRouter()
  const [Map, setMap] = useState()
  const [pageIsMounted, setPageIsMounted] = useState(false)

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  const location = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "Raiz",
        properties: {
          name: i18n.T1,
          subname: "Cozumel",
          image: "1",
          date: "Anno 2018",
          description: "Event Management Cozumel",
          cluster: false,
          event_count: 1,
          venue: "agency",
        },
        geometry: {
          type: "Point",
          coordinates: COORDS
        }
      }
    ]
  }

  useEffect(() => {
    setPageIsMounted(true)

    // Use proper light/dark map theme
    // let mapTheme = 'light'
    // if (localStorage?.theme === 'dark') {
    //   mapTheme = 'dark'
    // }

    const map = new mapboxgl.Map({
      container: 'map',
      // style: `mapbox://styles/mapbox/${mapTheme}-v10`,
      style: 'mapbox://styles/mapbox/satellite-v9',
      // style: 'mapbox://styles/mapbox/streets-v11',
      // style: 'mapbox://styles/mapbox/navigation-night-v1',
      center: COORDS,
      zoom: ZOOM,
    })

    initializeMap(map)
    setMap(map)
  }, [router.query.location])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (pageIsMounted) {
      Map.on('load', () => {
        addDataLayer(Map, location)
      })
    }
  }, [pageIsMounted, setMap, Map])
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <div className='pt-12 pb-24'>
        <h1 className='text-6xl'>{i18n.T1}</h1>
        <div className='my-12 max-w-2xl mx-auto leading-relaxed text-xl text-left'>
          {i18n.T2}
        </div>
        <div id='map' className='w-full h-screen' />
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  let i18n
  context.locale === 'en' ?
    i18n = langEN.about :
    i18n = langES.about
  return {
    props: { i18n },
  }
}

export default About
