import 'leaflet/dist/leaflet.css'
import React from 'react';
import type { Place } from './api/Place';
import {Map as LeafletMap} from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useRef, useEffect } from 'react';

interface MapProp {
    place: Place | null;
}

export const Map = ({place}: MapProp) => {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(()=>{
    if(mapRef.current && place){
      mapRef.current.flyTo([place.latitute,place.longitute]);
    }
  },[place])

  return (
      <MapContainer ref={mapRef}
        center={[45.7,-74]}
        zoom={12}
        scrollWheelZoom
        className='h-full'
      
      >

      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
      {place && <Marker position={[place.latitute,place.longitute]}/>}

      </MapContainer>
  ) 
}

