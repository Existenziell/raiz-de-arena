import { mapbox } from './mapbox.js'
import { COORDS } from '../config.js'

export function initializeMap(map) {

  const html = `
    <div>
    <img src='/raiz-de-arena.svg' alt='Raiz HQ' />
    <img src='/raiz-de-arena-text.svg' alt='Raiz HQ' />
    <a href='https://api.whatsapp.com/send?phone=5219875640622' target='_blank' rel='noopener noreferrer nofollow'>+52 1 987 564 0622</a>
    </div>
  `
  const coordinates = COORDS

  // Always open markerpopup on load
  new mapbox.Popup()
    .setLngLat(coordinates)
    .setHTML(html)
    .addTo(map)

  // Open marker popup on click
  map.on('click', 'unclustered-point', () => {
    new mapbox.Popup().setLngLat(coordinates).setHTML(html).addTo(map)
  })

  // Add geolocate control to the map.
  new mapbox.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  })

}
