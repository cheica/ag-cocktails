import react from 'react'
import {NavLink} from 'react-router-dom'

function NavBar () {
    return (
    
    <header>
    
        <nav>
            <NavLink className="button" to="./aboutus">
                About Us
            </NavLink>
            <NavLink className="button" to="./cocktails">
                Cocktails
            </NavLink>
            <NavLink className="button" to="./login">
                Log-In
            </NavLink>
            
        </nav>
    </header>
    )

}

export default NavBar;