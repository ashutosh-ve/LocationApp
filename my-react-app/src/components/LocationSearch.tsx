import React, { useState } from 'react'
import type { Place } from './api/Place'


interface LocatioSearchProps {
    onPlaceClick: (place: Place) => void;

}

export const LocationSearch = ({onPlaceClick}) => {
    const [term,setTerm] = useState("");
    const [places,setPlaces] = useState<Place[]>([]);

  return (
    <div>
        <form>
            <label className='font-bold' htmlFor='term'>
                Search
            </label>
            <input className='border border-grey-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full' id={term}
                onChange={e=> setTerm(e.target.value)}
            />

        </form>
    </div>
  )
}
