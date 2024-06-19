
import './ApartmentGrid.scss'
import './ApartmentCard.scss'
import {Link} from "react-router-dom"


function ApartementCard(props) {
  

  return (
    <Link to ="/flat" state = {{ 
      apartmentId: props.id
  }}>
    <div className='apartment'>
      <img src={props.imageUrl} alt="Apartment image" /> 
      <div className='apartment_subtitle'>{props.title}</div>
    </div>
    </Link>
  )
}

export default ApartementCard
