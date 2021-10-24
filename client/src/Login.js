import { useState } from "react";
import { Link } from "react-router-dom";

function LogIn(){

    const [userLogging, setUserLogging] = useState("")

    function typingUser(synthEvent){
        console.log("UsernameLogging")
        setUserLogging(synthEvent.target.value)

    }

    function handleUserLogin(synthEvent){
        synthEvent.preventDefault()

        const userObj = {

        }
        console.log("Username to check for login", userLogging)

        fetch("/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: userLogging})
        })
        .then(response => response.json())
        .then(console.log)

    }


    function renderLogIn(){

        return (
            <div>
                <h2 className="center">Admin Log-In</h2>
                <form className="center" onSubmit={handleUserLogin}> Need OnSubmit
                <label className="button"> Username:  </label> 
                <input className="input" type="text" onChange={typingUser} />Need OnChange 
                <label className="button"> Password:  </label>
                <input className="input" type="password"/>Need OnChange 
                {/* <Link to = "/cocktails">  */}
                <button className="button">LogIn</button>
                {/* </Link> */}
                
                {/* <input type="submit" value= "Login"/> */}
 
 
                </form>
     </div>
 
        )
    }
 
         
     
    return(
        <div>
        {renderLogIn()}
        </div>
        
    )
}

export default LogIn;