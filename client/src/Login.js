import { useState } from "react";
import { Link } from "react-router-dom";

function LogIn(props){


    

    const [username, setUsername] = useState("")

    const [userActive, setUserActive] = useState(false)
    console.log("Is anyone logged In?", userActive)


    function typingUser(synthEvent){
        console.log("UsernameLogging",synthEvent.target.value )
        setUsername(synthEvent.target.value)

    }

    function handleUserLogin(synthEvent){
        synthEvent.preventDefault()

            

        console.log("Username to check for login", username)

        // const userObj = {
        // //     username: username
        // }

        fetch("/api/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username: username})
        })
        .then(response => response.json())
        .then(loggedin => {console.log("We're loggedin:", loggedin)
            setUserActive(true)

            props.findUser()
            
        })

    }


    function renderLogIn(){

        return (
            <div>
                <form className="admin-form" onSubmit={handleUserLogin}>
                    <label>Username: </label>
                    <input type="user-text"  placeholder="Your username.." onChange={typingUser}/>
                    <label>Password: </label>
                    <input type="password"  placeholder="Your password.."/>

                    <input type="submit" value="Submit"/>
                </form>
                {whosHere()}
            </div>
 
        )
    }

    function handleUserLogOUT (synthEvent) {
        synthEvent.preventDefault()

        fetch("/api/login", {
            method: "DELETE"
            
            
        })
        .then(response => response.json())
        .then(loggedOut => {console.log("Until next time", loggedOut)
            setUserActive(false)
            // console.log("UserActive?", userActive)
        })

    }
 
    const whosHere=()=> {

        //Ternary 
        return userActive ? 
        (<button onClick={handleUserLogOUT}> Logout </button>) 
        :
        (
            <>
            </>
        )


    }
         
     
    return(
        <div className="center">
        {renderLogIn()}
        </div>
        
    )
}

export default LogIn;