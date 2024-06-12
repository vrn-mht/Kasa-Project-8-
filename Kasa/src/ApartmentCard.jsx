
import './ApartmentGrid.scss'
import './ApartmentCard.scss'
import {NavLink} from "react-router-dom"

function ApartementCard() {
  return (
    <div className='apartment'> 
    <NavLink to ="/flat">
      <div className='apartment_subtitle'>Titre de la location</div>
    </NavLink>
    </div>
  )
}

export default ApartementCard
