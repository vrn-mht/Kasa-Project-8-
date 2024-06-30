
import './ApartmentGrid.scss'
import ApartmentCard from "./ApartmentCard.jsx"
import { useEffect, useState } from 'react';


function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

  
  useEffect(()=> {
    console.log("component was mounted, we fetch apartments");
    const abortController = new AbortController();

    fetch("db.json", {signal: abortController.signal})
    .then((res) => res.json())
    .then(res => setApartments(res))
    .catch(console.error); 
    return () => {
      console.log("component was unmounted, we cancel the fetch");
      abortController.abort();
    };
    }, []);
  
  


  return (
    <div className='grid' >
      {apartments.map((apartment) => (
      <ApartmentCard title = {apartment.title} imageUrl={apartment.cover} id={apartment.id} key={apartment.id} />
         ))}
    </div>
  )
}

export default ApartmentGrid
