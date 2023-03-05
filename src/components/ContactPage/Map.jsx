import { MapContainer, Marker, Popup, useMap, TileLayer } from 'react-leaflet'

const Map = () => {
  const position = [45.6859, 10.6587]

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className='rounded-[10%] shadow-xl min-w-[350px] min-h-[350px] z-0'
    >
      <TileLayer
        attribution='&copy; '
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          L'AMO BISTROT <br />
          Piazza Nazario Sauro, 29, 25084 Gargnano BS <br />
          <a
            href="https://www.google.com/maps/dir/44.9633897,10.8285344/l'amo+bistrot+google+maps/@45.3181002,10.1457126,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47818b5208f0453f:0x431ca8abd91850f6!2m2!1d10.6524699!2d45.6755513"
            target='_blank'
          >
            Ottieni indicazioni
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
