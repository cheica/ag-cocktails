import Rates from "./Rates";

function RatesCard (props) {

    console.log("These are my Services from Fetch", props)

    return(
        <>
   
         <div className="prod-container">
            <div className="center"> 
                <div className="prod-card" >
                    <img className="prod-img" src={props.RatesToRender.image} alt={props.RatesToRender.serv} />
        
                    <h2> {props.RatesToRender.serv}</h2>
                     <h4> {props.RatesToRender.description}</h4>

                </div>

            </div>
        </div>
        </>
    
    )

}

export default RatesCard;