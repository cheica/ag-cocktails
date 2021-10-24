import react from 'react'
import {NavLink} from 'react-router-dom'

function NavBar () {
    return (
    
    <header className="center">
        
        <nav className="topnav">
            <NavLink className="nav-button" to="./ ">
                About Us
            </NavLink>
            <NavLink className="nav-button" to="./cocktails">
                Cocktails
            </NavLink>
            <NavLink className="nav-button" to="./services">
                Services
            </NavLink>
            
            <NavLink className="nav-button" to="./reviews">
                Reviews
            </NavLink>
            <NavLink className="nav-button" to="./contactus">
                Contact Us
            </NavLink>
            
            <NavLink className="nav-button" to="./login">
                Log-In
            </NavLink>
            
        </nav>
        
    </header>
    )

}

export default NavBar;