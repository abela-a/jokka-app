export default function(context, inject){
  inject('mapbox', { showMap })

  function showMap(canvas, lat, lng){
    const mapboxgl = require('mapbox-gl');
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWJlbGEiLCJhIjoiY2wwdDN5emMzMDloMzNkbjFrdDE0cTZxcCJ9.Ym-5XgGMidYH3PL405BSvQ'

    const map = new mapboxgl.Map({
      container: canvas,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 18
    })

    const location = new mapboxgl.Marker({ color: 'red' })
      .setLngLat([lng, lat])
      .addTo(map);
  }
}