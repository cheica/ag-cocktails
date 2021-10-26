import { Link } from "react-router-dom";

function AboutUs(){
    return (
    <div>
    
    {/* <img src="https://pbs.twimg.com/media/FCP8HSzWEAAiNmw?format=jpg&name=small"  alt="AG Cocktails logo" className="center"/> */}
    <h1 className="glow">AG Cocktail Alchemist</h1>

    <p >
        A.G Cocktail Alchemist was founded by Andres Giraldo. Andres was born in Pereira, Colombia and moved to New Jersey when he was just a teen. After starting his career in the restaurant industry, Andres discovered his passion for bartending and has been doing so professionally for over a decade. Every drink is made with dedication, creativity and love! 
        <br></br>
        <br></br>
        <br></br>
        A.G. Cocktail Alchemist's staff is comprised of a Certfied Sommelier, Menu Designers and Bartenders. We are ready to cater your private event no matter the size! 

        <br></br>
        <br></br>
        <br></br>
    </p>
    <div className="flex-container">
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
             <div className="flex-container">
        <div class="profile-card">
            <img src="https://pbs.twimg.com/media/FCb5uQuXEAInSl5?format=jpg&name=large" className="propic" alt="John"/>
            <h1>Andres Giraldo</h1>
            <p class="prof-title">CEO/Founder</p>
            <a href="https://www.instagram.com/a.g.cocktail_alchemist/"><i class="fa fa-instagram"></i></a>
            <a href="mailto:a.g.cocktailalchemist@gmail.com"><i class="fa fa-inbox"></i></a>
            <a href="https://api.whatsapp.com/send?phone=2012339012"><i class="fa fa-whatsapp"></i></a>
            <a href="https://www.facebook.com/Andreslds86"><i class="fa fa-facebook"></i></a>
            <p><Link className="button" to="./contactus">Contact</Link></p>
        </div>

        
<div class="profile-card">
    <img src="https://pbs.twimg.com/media/FCb98XIXsAQdWe2?format=jpg&name=large" className="propic" alt="John"/>
    <h1>Josh Pita</h1>
    <p class="prof-title">Sommelier</p>
    <a href="https://www.instagram.com/a.g.cocktail_alchemist/"><i class="fa fa-instagram"></i></a>
    <p><Link className="button" to="./contactus">Contact</Link></p>
</div>
</div>
</div>
    



    </div>
    )

}
export default AboutUs;






// //////////////

    /* <div className="center"> 
     <div className="flex-container">
        <div className="center"> 
        <div className="card" >
            <h2 className="center">Meet the Staff</h2>
            <br></br>
            <img className="card-img" src="https://pbs.twimg.com/media/FCQpkyJXoAAyet1?format=jpg&name=medium" alt="Staff" />
       
                <h4 > Andres Giraldo (Founder) and Joshua Pita</h4>
            
        </div>

    </div>
    </div>
    </div> */

    // <br></br>
    // {/* <br></br> */}
    // {/* <br></br> */}

/* <h2 className="center"> Please feel free to leave a review below! </h2> */