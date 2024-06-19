import './ApartmentPages.scss'
import { DescriptionPanel } from '../components/DescriptionPanel'
import ImageBanner from '../components/ImageBanner'
import ApartmentHeader from '../components/ApartmentHeader'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


function ApartmentPages() {
  const location = useLocation();
  const [flat, setflat] = useState (null);
  console.log("flat:", flat);
  useEffect(fetchApartmentData, []);

  function fetchApartmentData() {
    fetch("db.json")
    .then((res) => res.json())
    .then((flats) => { 
     const flat = flats.find((flat)=> flat.id === location.state.apartmentId);
     setflat(flat);
    })
    .catch(console.error)
  }
  if (flat == null) return <div>Loading...</div>


  return (
    <div className='apartment-page'>
     <ImageBanner imageUrl= {flat.cover}/>
      <ApartmentHeader flat= {flat} />
                <div className="apartment__description__area">
           <DescriptionPanel title="Description" content= {flat.description}/>
           <DescriptionPanel title="Equipements" content= {flat.equipments.map((eq) => 
            (<li>{eq}</li>
            ))}/>
           </div>
            
    </div>
  )
}

export default ApartmentPages
