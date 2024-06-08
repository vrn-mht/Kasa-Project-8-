
import './ApartmentGrid.css'
import './Apartment.css'
import {NavLink} from "react-router-dom"

function Apartement() {
  return (
    <div className='apartment'> 
    <NavLink to ="/flat">
      <div className='apartment_subtitle'>Titre de la location</div>
    </NavLink>
    </div>
  )
}

export default Apartement
