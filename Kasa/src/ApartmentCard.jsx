
import './ApartmentGrid.scss'
import './ApartmentCard.scss'
import {NavLink} from "react-router-dom"

function ApartementCard(props) {
  console.log("props dans apartment card:", props);
  return (
    <NavLink to ="/flat">
    <div className='apartment'>
      <img src={props.imageUrl} alt="" /> 
      <div className='apartment_subtitle'>{props.title}</div>
    </div>
    </NavLink>
  )
}

export default ApartementCard
