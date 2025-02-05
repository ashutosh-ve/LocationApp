import React from 'react';
import type { Place } from './api/Place';

interface MapProp {
    place: Place | null;
}

export const Map = ({place}: MapProp) => {
  return (
    <div>Map</div>
  ) 
}

