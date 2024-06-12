
import './ApartmentHeader.scss'

 export function ApartmentHeader() {
  return (
    <div className="apartment__header">
      <div className="apartment__title"> 
              <h1>Cozy loft on the Canal Saint-Martin</h1>
              <h2>Paris, Île-de-France</h2>
              <div className="apartment__tags">
              <span>Cozy</span>
              <span>Canal</span>
              <span>Paris 10</span>
              </div>
      </div>
        <div className="apartment__owner">
            <div className="apartment__owner__details">
            <h3> <span>Alexandre</span> <span>Dumas</span></h3>
            <div className="apartment__owner__badge">
            </div>
            </div>
                <div className="apartment__owner__stars">
                    <span> ★ </span>
                    <span> ★ </span>
                    <span> ★ </span>
                    <span className='off'> ★</span>
                    <span className='off'> ★ </span>
                </div>
                </div>
                </div>
  )
}

export default ApartmentHeader
