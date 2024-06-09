
import "./Navbar.scss";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar_logo">
        <img src="logo.png" alt="Logo Kasa" />
      </div>
       <NavLink> 
       <div>Acceuil</div>
       </NavLink> 
     <NavLink to="/about">
     <div>A propos</div>
     </NavLink> 
    </nav>
  )
}

export default Navbar
