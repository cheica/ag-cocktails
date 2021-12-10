import { useEffect, useState } from "react";
import BookNow from "./BookNow";
import RatesCard from './RatesCard'


function Rates () { 

    const [rates, setRates] = useState( [] )


    useEffect( () => {
        fetch("/api/rates")
        .then(response => response.json())
        .then(fetchedRates => {console.log("from fetch:", fetchedRates)
            setRates(fetchedRates)
            
    
    })
    },[]);

    const mapRates = () => {
        let mappedRates = rates.map(eachRate => {
            return (
            
                <RatesCard
                key={eachRate.id}
                RatesToRender={eachRate}
                 />
                
                
            )
        })
        return mappedRates
    }


    return (
        <div>
            <h1 className="glow"> Our Services:</h1>
            {<BookNow/>}
            <br></br>
            
            
            {mapRates()}
        </div>
    )

}


export default Rates; 