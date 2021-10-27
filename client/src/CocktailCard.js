import { useEffect, useState } from 'react'
import Cocktails from './Cocktails'


function CocktailCard(props){
    console.log("Props in Cocktails Card", props.adminPassCard)
    // console.log("from props", props.deleteFunction)
 

    // Delete Function 
    // const [cocktails, setCocktails] = useState( [] )

//     function handleDelete (fullDrink){
//       console.log("In the delete function")
//       console.log("This is the cocktail ID", fullDrink)
//       fetch (`/cocktails/${fullDrink}`, { 
//           method: "DELETE"
      
//       })
  
//       .then(response => response.json())
//       .then(toRemove => {console.log("Removing this", toRemove)
//           let filterDrinks = cocktails.filter(eachDrink => 
//               eachDrink.id != fullDrink)
//               setCocktails([...filterDrinks])
//           })
  
//   }

// function 


 
    return (
     
    <div className="flex-container">
        <div className="center"> 
            <div className="card" >
                 <img className="card-img" src={props.drinksToRender.image} alt={props.drinksToRender.name} />
            <div className="feature-name">
                <h4 >{props.drinksToRender.name}</h4>
            </div>
            
            { props.adminPassCard ?
                <button className="delete-butt" onClick={(e) => props.deleteFunc(props.drinksToRender.id)}>Delete</button>
            : 

                <></>
            } 
                </div>

        </div>
    </div>
    )

}

export default CocktailCard;;