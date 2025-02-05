import React, { Fragment, useState } from 'react'
import type { Place } from './api/Place'
import { Search } from './api/Search';  



interface LocatioSearchProps {
    onPlaceClick: (place: Place) => void;

}

export const LocationSearch = ({onPlaceClick}: LocatioSearchProps) => {
    const [term,setTerm] = useState("");
    const [places,setPlaces] = useState<Place[]>([]);

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
       const results = await Search(term);
       setPlaces(results);
    }
      

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label className='font-bold' htmlFor='term'>
                Search
            </label>
            <input className='border border-grey-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full' id={term}
                onChange={e=> setTerm(e.target.value)}
            />

        </form>
        <h1 className='font-bold mt-6'>Found Location</h1>
        <div className='grid grid-cols-[1fr_40px] gap-2 mt-2 items-center'>
            {
                places.map(place=>{
                    return <Fragment key={place.id}>
                            <p className='text-sm'>{place.name}</p>
                            <button className='bg-sky-400 text-xs font-bold rounded' onClick={()=>onPlaceClick(place)}>Goo....!</button>
                            <div className='border-b w-full col-span-2'/>
                    </Fragment>
                })
            }
        </div>
    </div>
  )
}
